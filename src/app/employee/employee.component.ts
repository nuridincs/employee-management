import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';
import { NgbModal, ModalDismissReasons, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  formEmployee = new FormGroup({
    username: new FormControl(),
    firtsname: new FormControl(),
    lastname: new FormControl(),
    birthDate: new FormControl(),
    basicSalary: new FormControl(),
    status: new FormControl(),
    description: new FormControl(),
  });
  closeResult: string;
  dtOptions: DataTables.Settings = {};
  employeeList = employee;

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar
  ) { }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.formEmployee = new FormGroup({
        username: new FormControl(),
        firtsname: new FormControl(),
        lastname: new FormControl(),
        birthDate: new FormControl(),
        basicSalary: new FormControl(),
        status: new FormControl(),
        description: new FormControl(),
      });
    }, (reason) => {
      console.log('close', this.closeResult);
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
    this.employeeList.push({
      id: 3,
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      email: 'test.tes@gmail.com',
      birthDate: '1995-01-01',
      basicSalary: '2000000',
      status: 'single',
      group: 'test',
      description: '2020-04-15'
    });
    console.log('form', this.formEmployee.value);
  }

  selectToday() {
    this.formEmployee.value.birthDate = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
