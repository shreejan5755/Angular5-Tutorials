import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  // 50 filtering on componenet
  filteredEmployees: Employee[];
  private _searchTerm: string;

  // making the getter and setter 
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) { //everytime searchTerm changes in the view setter is called
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  //filter method 
  filterEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {
    //using the ActivatedRoute variable to get the prefetched data
    this.employees = this._route.snapshot.data['employeeList'];
     //using snapshot method  
     if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployees = this.employees;
    }

     //using observable
      // this._route.queryParamMap.subscribe((queryParams) => {
      //   if(queryParams.has('searchTerm')){
      //     this.searchTerm = queryParams.get('searchTerm');
      //   }else{
      //     this.filteredEmployees = this.employees;
      //   }
      // });
   }

  ngOnInit() {
  }

}
