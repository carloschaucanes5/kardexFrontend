import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Response } from '../../models/response';

interface TypeIdentification{
  id:string;
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
      typeidentification:new FormControl('',[Validators.required]),
      identification:new FormControl('',[Validators.required,Validators.maxLength(15)]),
      firts_name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      second_name:new FormControl('',[Validators.maxLength(15)]),
      first_lastname:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      second_lastname:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      email:new FormControl('',[Validators.email]),
      address:new FormControl('',[Validators.maxLength(60)]),
      phone:new FormControl('',[Validators.maxLength(15)]),
      password: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      confirm:new FormControl('',[Validators.required,Validators.maxLength(20)]),
  })

   constructor(private service:UserService){

   }
  ngOnInit(): void {
      this.service.getTypesIdentification().subscribe(lis=>{
        this.typesIdentification = lis.response;
      })
      
  }

  submit(){
    if(!this.createUserForm.valid){
      this.resultado = "El formulario es incorrecto";
    }
    else{
      this.resultado = "El formulario es correcto";
    }
  }
}

