import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  
  //for delete confirmation
  confirmDelete = false;


  //creating a prperty to keep in track the accordian type functionlity
  panelExpanded = true;


  private selectedEmployeeId: number;
  

  constructor(private _route: ActivatedRoute, 
    private _router: Router,
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  //view employee method
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm}
    });
  }


  //edit employee method
  editEmployee(){
    this._router.navigate(['/edit', this.employee.id], {      
    });
  }

  //delete method  
  deleteEmployee(){
    this._employeeService.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}
