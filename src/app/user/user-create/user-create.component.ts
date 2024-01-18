import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserConfig as UC } from '../user-config';
import { tap } from 'rxjs';
import { CustumeValidators } from 'src/app/utils/CustomeValidators';
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
     stateValidate:boolean = false;
     typesIdentification:TypeIdentification[]=[];
     resultado?:string;
     createUserForm = new FormGroup({
      idt:new FormControl('',[Validators.required]),
      identification:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorNumericField]),
      first_name:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetter]),
      second_name:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorOnlyLetter]),
      first_lastname:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetter]),
      second_lastname:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetter]),
      email:new FormControl('',[Validators.email]),
      address:new FormControl('',[Validators.maxLength(60)]),
      phone:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorNumericField]),
      password: new FormControl('',[Validators.required,Validators.maxLength(20), CustumeValidators.validatorPassword]),
      confirm:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      status:new FormControl('a'),
      id_role:new FormControl('1')
  })
   constructor(
      private service:UserService,
      private toast:ToastrService,
      private spinner:NgxSpinnerService){

   }
  ngOnInit(): void {
      this.service.getTypesIdentification().subscribe(lis=>{
        this.typesIdentification = lis.response;
      })  
  }
  submit(){
    this.stateValidate = true;
    if(this.createUserForm.valid){
     this.service.saveUser(this.createUserForm.value).subscribe(res=>{
      console.log(JSON.stringify(res));
      if(res.code == UC.C200){
        this.toast.success(res.message,UC.SUCCESSOPERATION);
      }
      else if(res.code >=UC.C400 && res.code <=UC.C499)
      {
        this.toast.warning(res.message,UC.WARNINGOPERATION);
      }
      else
      {
        this.toast.error(res.message,UC.ERROROPERATION);
      }
     });
    }
  }
}

