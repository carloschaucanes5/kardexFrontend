import { Component, ViewChild,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import  {General as GG}  from './config/general';
import { HttpClient } from '@angular/common/http';
import { Observable, concatAll, concatMap, switchMap } from 'rxjs';
import { map } from 'rxjs';

interface Response{
  info:string;
  results:Personaje[];
}
interface Personaje{
  id:number;
  name:string;
  status:string;
  species:string;
  gender:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  events: string[] = [];
  opened?: boolean=true;
  authenticated:boolean = false;
 
  constructor(private authService:AuthService){}
  
  ngOnInit(): void {
      this.verifyLogin();
  }

  verifyLogin(){
    this.authService.loginIn().subscribe(logged=>{
      let url:any = window.document.URL;
      url = url.split(GG.URL)[1];
      if(logged){
        if(url == GG.URLAUTH || url == GG.URLBEGIN){
          this.authenticated = false;
        }
        else{
          this.authenticated = true;
        }
      }
      else
      {
        this.authenticated = false;
      }
    })
  }
}