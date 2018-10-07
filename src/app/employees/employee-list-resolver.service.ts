import { EmployeeService } from './employee.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Employee } from "../models/employee.model";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Injectable()
export class EmployeeListResolverService implements Resolve<ResolvedEmployeeList>{

    constructor(private _employeeService: EmployeeService) { }

    //If the resolver completes successfully, we populate the employeeList property of our custom type with the array of employees //we get from the service. 
    //If there is an error, we populate the error property of our custom type, and a value of null is pass to the employeeList property.
    // So, in the target component where this reolver data is consume we can check if the error property is NULL or NOT and react //accordingly.
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList> {
        return this._employeeService.getEmployees()
        .pipe(
            map((employeeList) => new ResolvedEmployeeList(employeeList)),
            catchError((err:any) => of(new ResolvedEmployeeList(null,err)))
        )
    }
}


