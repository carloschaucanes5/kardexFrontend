import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = "/kardexAPI/getTypesIdentification";
  constructor(private http:HttpClient) {}

  getTypesIdentification():Observable<any>{
    return this.http.get<Response>(this.urlApi);
  }
}
