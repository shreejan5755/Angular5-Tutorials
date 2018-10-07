import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  // 67 error property to catch the error comming from the Resolver service
  error: string;

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
    //using the ResolvedEmployeeList type data from the employee-list-resolver.service
    const resolvedEmployeeList: ResolvedEmployeeList = this._route.snapshot.data['employeeList'];
    //using snapshot method  
    //checking if the resolvedEmployeeList has error property active
    if (resolvedEmployeeList.error == null) {
      this.employees = resolvedEmployeeList.employeeList;
    }
    else {
      this.error = resolvedEmployeeList.error;
    }
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

// 67. Handing resolver error without making new type
// resolvedData can either be a string or Employee[]
//   const resolvedData: string | Employee[] = this._route.snapshot.data['employeeList'];

//   // If the resolver completed without errors resolvedData is an Employee[]
//   if(Array.isArray(resolvedData)) {
//   this.employees = resolvedData;
// } else {
//   this.error = resolvedData;
// }

ngOnInit() {
}

onDeleteNotification(id: number){
  const i = this.filteredEmployees.findIndex(e => e.id === id);
  if (i !== -1) {
    this.filteredEmployees.splice(i, 1);
  }
}
}
