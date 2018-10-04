import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];

  // variable to hold the current employee data
  employeeToDisplay: Employee;

  // private variable to hold the current employee index
  private arrayIndex = 1;

  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void{
    if(this.arrayIndex <= 2){
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }
    else{
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

}
