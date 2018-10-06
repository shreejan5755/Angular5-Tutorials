import { EmployeeService } from './employee.service';
import { Employee } from './../models/employee.model';
import { Department } from './../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //creating a ViewChild to allow the child to access ngForm template variable to child
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  //creating a employee model type list 
  employee: Employee;

  //creating a property to hold the title either edit or create
  panelTitle: string;

  //items for the dropdown list
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  //defining a default value for gender
  //gender = 'male';

  //defining the default value for isActive
  //isActive = true;

  //defining default department property
  //department = '3';

  //datepicker configuration 
  // datepickerConfig is defined as partial so that we can set individual property
  datePickerConfig: Partial<BsDatepickerConfig>;


  //initializing a previewPhoto property to false so that initially the phooto isn't displayed
  previewPhoto: boolean = false;

  constructor(private _employeeService: EmployeeService
    , private _router: Router
    , private _route: ActivatedRoute) {
    //Object.assign method assign from one or more source object to destination object
    // Object.assign( destination , source)
    // defining that containerClass so that only that can be assigned not other preperty
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  //method for photo show and hide
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  //for setting a default date value
  dateOfBirth: Date = new Date(2018, 0, 30);

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  //getting employee details by Id
  private getEmployee(id: number) {
    if(id == 0){
      this.employee = {        
          id: null,
          name: null,
          gender: null,
          contactPreference: null,
          phoneNumber: null,
          email: null,
          dataOfBirth: null,
          department: null,
          isActive: null,
          photoPath: null,        
      };
      //setting the panel heading to Create employee
      this.panelTitle = "Create Employee";
      //resetting all the form validation properties so that validation error aren't active
      this.createEmployeeForm.reset();
    }else{
      //setting the panel heading to Edit employee
      this.panelTitle = "Edit Employee";
      this.employee = Object.assign({},this._employeeService.getEmployee(id));
    }
  }



  //save method to save the data
  saveEmployee(): void {
    //using object assign method to create a copy of the object
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee)
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }
}
