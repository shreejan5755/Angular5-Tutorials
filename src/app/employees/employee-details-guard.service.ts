import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {

    constructor(private _employeeService: EmployeeService, 
        private _router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        // !! is used to convert string to boolean
        const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
      
        if(employeeExists){
            return true;
        }else{
            this._router.navigate(['notfound']);
            return false;
        }
      
    }

}