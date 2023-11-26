import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullName:string = "";
  constructor(
    private authService:AuthService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.setFullName();
  } 

  setFullName(){
    const user:any = this.authService.getDataUser();
    if(user){
      let objUser = JSON.parse(user);
      this.fullName = `${objUser.first_name} ${objUser.first_lastname}`;
    }
  }

  closeSession(){
    this.authService.deleteDataUser();
    this.authService.deleteDataToken();
    this.router.navigate(['auth']).then(()=>{
      window.location.reload();
    });
  }
}
