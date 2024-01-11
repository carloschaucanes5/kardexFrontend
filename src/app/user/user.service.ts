import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
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
    return this.http.post(this.urlApi + "saveUser",user);
  }

  
}
