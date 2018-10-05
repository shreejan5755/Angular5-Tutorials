import { Employee } from './../models/employee.model';
import { Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee:Employee;

  //@Input() employeeId: number;

  //constructing a private field to get and set employee
  //private _employee: Employee;

  //constructing the getter and setter for the input
  // @Input()
  // set employee(val: Employee) {
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //  for( const propName of Object.keys(changes)){
  //    //these keys can be used to track the changes that happened
  //    const change = changes[propName];
  //    const from = JSON.stringify(change.previousValue);
  //    const to = JSON.stringify(change.currentValue);

  //    console.log(propName + ' changed from '+ from + ' to '+ to);
  //  }
    
  //}

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
