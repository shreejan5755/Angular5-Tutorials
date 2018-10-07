import { Observable, of, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { delay, catchError } from 'rxjs/operators'
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'


@Injectable()
export class EmployeeService {

    //keeping the base url of the web api in a variable
    baseUrl = 'http://localhost:3000/employees';

    constructor(private httpClient: HttpClient) { }

    //method to get the data of all employees to display from web API
    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
    }

    //error handling for the webAPI connection using HTTP client
    private handleError(errorResponse: HttpErrorResponse) {
        //distinguishing between server and client error
        // ErrorEvent is a client side or network error
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return throwError('There is a problem with the service. We are notified and working on it. Please try again later.')
    }

    //method to get Employee by id
    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }

    //method to add the data of the new employee
    addEmployee(employee: Employee): Observable<Employee> {
        // post(uri, data to post, Content-Type http header )
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    //update method
    updateEmployee(employee: Employee): Observable<void> {
        // put(uri, data to post, Content-Type http header )
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }


    //delete method
    deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }

}