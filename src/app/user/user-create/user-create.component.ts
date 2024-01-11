import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Response } from '../../models/response';

interface TypeIdentification{
  idt:string;
  description:string;
  state:string;
};



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})


export class UserCreateComponent implements OnInit{
     typesIdentification:TypeIdentification[]=[];
     resultado?:string;
     createUserForm = new FormGroup({
      idt:new FormControl('',[Validators.required]),
      identification:new FormControl('',[Validators.required,Validators.maxLength(15)]),
      first_name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      second_name:new FormControl('',[Validators.maxLength(15)]),
      first_lastname:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      second_lastname:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email:new FormControl('',[Validators.email]),
      address:new FormControl('',[Validators.maxLength(60)]),
      phone:new FormControl('',[Validators.maxLength(15)]),
      password: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      confirm:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      status:new FormControl('a'),
      id_role:new FormControl('1')
  })

   constructor(private service:UserService){

   }
  ngOnInit(): void {
      this.service.getTypesIdentification().subscribe(lis=>{
        this.typesIdentification = lis.response;
      })
      
  }


  onSectionChange(value:any){
    console.log(value);
    //this.createUserForm.controls['typeidentification'].setValue(value);
  }
  submit(){
    if(!this.createUserForm.valid){
      console.log(this.createUserForm.value);
      this.resultado = "El formulario es incorrecto";
    }
    else{
     this.service.saveUser(this.createUserForm.value).subscribe(res=>{
      this.resultado = res.response.message;
      console.log(res);
     });
    }
  }
}

