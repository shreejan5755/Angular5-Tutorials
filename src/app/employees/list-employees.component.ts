import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee[];
  //to keep track of the data from child
  dataFromChild: Employee;
  
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();    
  }

  // method to handle the output event emitted by the child component
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  } 

}
