import { CanDeactivate } from '@angular/router';
import { EmployeeService } from './employees/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator,directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeativateGuardService } from './employees/create-employee-can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { 
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeativateGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeativateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
