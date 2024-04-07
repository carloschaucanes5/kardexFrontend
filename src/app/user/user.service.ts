import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = "/kardexAPI/";
  constructor(private http:HttpClient) {}

 //obtener los tipos de identificacion de cada usuario
  getTypesIdentification():Observable<any>{
    return this.http.get<Response>(this.urlApi+"getTypesIdentification");
  }
  //guardar un usuario en la base de datos
  saveUser(user:any):Observable<any>{
    return this.http.post<Response>(this.urlApi + "saveUser",user);
  }
 //encrypt password
 async encryptPassword(password:string){
  let a = "";
   await this.http.post<any>(this.urlApi + "encryptText",{"secretWord":password} ).pipe(
    map(res=>res.response)
  ).subscribe(res=>{
    a = res.response
  })
 }
 //listar usuarios
 listUser():Observable<Response>{
    return this.http.get<Response>(this.urlApi + "listUser")
 }
  
}
