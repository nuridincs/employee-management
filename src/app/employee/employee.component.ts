import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';
import { NgbModal, ModalDismissReasons, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  formEmployee: FormGroup;
  submitted = false;
  closeResult: string;
  dtOptions: DataTables.Settings = {};
  employeeList = employee;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar
  ) { }

  public today = new Date();

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  save(): void{
    this.submitted = true;
    if (this.formEmployee.invalid) {
      return;
    }
    console.log('form', this.formEmployee.value);
  }

  selectToday() {
    this.formEmployee.value.birthDate = this.calendar.getToday();
  }

  get formErr() { return this.formEmployee.controls; }

  dataEmployee() {
    this.formEmployee = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firtsname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.dataEmployee();
  }
}
