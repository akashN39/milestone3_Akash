import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  base_url="http://localhost:3000/employee";

  //myheader=new HttpHeaders().set("")
  constructor(public http:HttpClient) { }

  data:any;

  currentData:Employee={
    id: 0,
    name: "",
    address: "",
    phone: 0,
    country: ""
  };

  ngOnInit(): void {
    this.GetDetails();
  }

  GetDetails()
  {
    debugger;
    return this.http.get(this.base_url);
  }

  AddData(data:any):Observable<any>
  {
    return this.http.post(this.base_url,data).pipe(catchError(this.handleError));
  }

  DeleteData(id:any)
  {
    return this.http.delete(this.base_url+"/"+id);
  }

  UpdateData(data:Employee):Observable<any>
  {
    return this.http.put(this.base_url+"/"+data.id,data).pipe(catchError(this.handleError));
  }

  GetDataById(id:number)
  {
    return this.http.get(this.base_url+"/"+id);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
 
getallrecords(){}

}
