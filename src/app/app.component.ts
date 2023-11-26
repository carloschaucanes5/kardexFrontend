import { Component, ViewChild,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit {
  @ViewChild(LoginComponent) loginChild:any;
  events: string[] = [];
  opened?: boolean;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor(private authService:AuthService){}
  session = true;
  showNavigation:boolean = false;
 
  ngOnInit(): void {
      this.verifyLogin();
  }


  verifyLogin(){
    this.authService.loginIn().subscribe(logged=>{
      if(logged){
        this.showNavigation = true;
      }
      else
      {
        this.showNavigation = false;
      }
    })
  }
}