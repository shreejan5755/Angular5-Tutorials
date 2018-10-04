import { Employee } from './../models/employee.model';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit{

  //constructing a private field to get and set employee
  private _employee: Employee;

  //constructing the getter and setter for the input
  @Input()
  set employee(val : Employee){
    console.log('Previous : '+ (this._employee ? this._employee.name : 'NULL'));
    console.log('Current : '+ val.name);
    this._employee = val;
  }
  get employee(): Employee{
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;

  //   console.log('Previous : '+ (previousEmployee ? previousEmployee.name : 'NULL'));
  //   console.log('Current : '+ currentEmployee.name);
  // }

}
