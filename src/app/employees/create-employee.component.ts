import { Employee } from './../models/employee.model';
import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //creating a employee model type list 
  employee: Employee = {
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
   // password: null,
   // confirmPassword: null
  };

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

  constructor() {
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
  }


  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
