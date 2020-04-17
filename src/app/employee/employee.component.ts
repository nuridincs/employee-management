import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';
import { NgbModal, ModalDismissReasons, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  formEmployee: FormGroup;
  submitted = false;
  isSave = false;
  closeResult: string;
  dtOptions: DataTables.Settings = {};
  employeeList = employee;
  dataGroups = [
    { value: 1, label: 'Group 1' },
    { value: 2, label: 'Group 2' },
    { value: 3, label: 'Group 3' },
    { value: 4, label: 'Group 4' },
    { value: 5, label: 'Group 5' },
    { value: 6, label: 'Group 6' },
    { value: 7, label: 'Group 7' },
    { value: 8, label: 'Group 8' },
    { value: 9, label: 'Group 9' },
    { value: 10, label: 'Group 10' }
  ];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    private router: Router
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
    this.isSave = true;
    alert('Success save data');
    location.reload();
    // console.log('form', this.formEmployee.value);
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
      group: ['', Validators.required],
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
