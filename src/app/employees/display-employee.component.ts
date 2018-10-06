import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() searchTerm: string;
  
  private selectedEmployeeId: number;
  

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm}
    });
  }
  
}
