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

    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dataOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dataOfBirth: new Date('11/20/1979'),
            department: '1',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dataOfBirth: new Date('3/25/1976'),
            department: '3',
            isActive: false,
            photoPath: 'assets/images/john.png'
        },
    ];

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
    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        if (i !== -1) {
            this.listEmployees.splice(i, 1);
        }
    }

}