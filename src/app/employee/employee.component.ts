import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  dtOptions: DataTables.Settings = {};
  employeeList = employee;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
