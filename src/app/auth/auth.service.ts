import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs';
import { Response } from '../models/response';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = "/kardex/login";
  constructor(private http:HttpClient) { }

  //methods
  login(dataUser:Observable<any>){
    return this.http.post<Response>(this.urlApi,dataUser,this.createHeaders());
  }

  loginIn():Observable<boolean>{
    return of(!!localStorage.getItem('token'));
  }

  getDataUser(){
    return localStorage.getItem("user");
  }

  getToken(){
    return localStorage.getItem("token");
  }

  deleteDataUser(){
    localStorage.removeItem("user");
  }

  deleteDataToken(){
    localStorage.removeItem("token");
  }

  createHeaders(){
    return {
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
      })
    }
  }

}
