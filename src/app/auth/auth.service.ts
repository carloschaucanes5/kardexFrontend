import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map,mergeMap,of,tap,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs';
import { Response } from '../models/response';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = "/kardexAPI/";
  constructor(private http:HttpClient, private route:Router) { }

  //methods
  login(dataUser:Observable<any>){
    return this.http.post<Response>(this.urlApi+"login",dataUser);
  }

  loginIn():Observable<boolean>{
    return of(!!localStorage.getItem('token'));
  }

  revalidateToken():Observable<boolean>{
     return this.http.post<any>(this.urlApi+"revalidateToken",null)
    .pipe(
      map(res=>res.code==200?true:false)
    );
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

  closeSession(){
    this.deleteDataUser();
    this.deleteDataToken();
    this.route.navigate(['auth']).then(()=>{
      window.location.reload();
    });
  }

}
