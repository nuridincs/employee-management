import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  title = 'json-file-employee';
  employeeList = employee;

  constructor() { }

  ngOnInit(): void {
    // console.log('employeeList', employee)
  }

}
