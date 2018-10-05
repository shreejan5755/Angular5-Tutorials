import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;

  // Creating output property to pass the employee name from child to parent component.
  // Child passes data to parent thorugh an event so the type of output property is defined as EventEmitter
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

}
