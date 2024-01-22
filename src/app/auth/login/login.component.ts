import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserConfig as UC} from 'src/app/user/user-config';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
    identification:any = "";
    password:any = "";
constructor(
  private authService:AuthService,
  private router:Router,
  private toastr:ToastrService
  ){}

ngOnInit(): void {}

login(){
  let auth:any = {email:this.identification,password:this.password}
  this.authService.login(auth).subscribe(data=>{;
    if(data.code == UC.C200){
      localStorage.setItem("user",JSON.stringify(data.response.user));
      localStorage.setItem("token",data.response.token);
      this.router?.navigate(['main']).then(()=>{
        window.location.reload();
      });
    }
    else if(data.code >= UC.C400 && data.code <= UC.C499){
      this.toastr.warning(UC.C401INVALIDDATA)
    }else{
      this.toastr.error(UC.C501ERRORSERVER)
    }
  });
}
}
