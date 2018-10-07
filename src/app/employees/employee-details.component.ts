import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  //using the id field to keep track of the employeeId
  private _id: number;

  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router){ }

  ngOnInit() {
    //this._id = +this._route.snapshot.paramMap.get('id');//+this._route.snapshot.param['id']
    //observable approach
    this._route.paramMap.subscribe(params =>{ 
      this._id = +params.get('id');
      this._employeeService.getEmployee(this._id).subscribe((employee) => this.employee = employee, (err:any)=> console.log(err));
    });    
  }

  //to move to next employee details
  viewNextEmployee(){
    if(this._id < 3){
    this._id = this._id + 1;    
    }else{
      this._id = 1;
    }
    this._router.navigate(['/employees', this._id],{
      queryParamsHandling: 'preserve'
    }); 
  }

}
