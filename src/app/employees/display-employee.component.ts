import { ActivatedRoute } from '@angular/router';
import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  private selectedEmployeeId: number;
  

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

 
  
}
