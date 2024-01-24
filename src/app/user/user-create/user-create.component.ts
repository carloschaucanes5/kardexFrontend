import { Component, OnInit, ViewChild, ElementRef,AfterViewInit,AfterViewChecked } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { UserConfig as UC } from '../user-config';
import { CustumeValidators } from 'src/app/utils/CustomeValidators';
import { NgxSpinnerService } from "ngx-spinner";
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
     @ViewChild('eleConfirm') eleConfirm!: ElementRef;
     stateValidate:boolean = false;
     typesIdentification:TypeIdentification[]=[];
     resultado?:string;
     createUserForm = new FormGroup({
      idt:new FormControl('',[Validators.required]),
      identification:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorNumericField]),
      first_name:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetter]),
      second_name:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorOnlyLetterAndSpace]),
      first_lastname:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetter]),
      second_lastname:new FormControl('',[Validators.maxLength(50),CustumeValidators.validatorOnlyLetterAndSpace]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',[Validators.maxLength(60)]),
      phone:new FormControl('',[Validators.maxLength(15),CustumeValidators.validatorNumericField]),
      password: new FormControl('',[Validators.required,Validators.maxLength(20),CustumeValidators.validatorPassword]),
      confirm:new FormControl('',[Validators.required]),
  })
   constructor(
      private service:UserService,
      private toast:ToastrService,
      public spinner:NgxSpinnerService ){
   }
  ngOnInit(): void {
      this.service.getTypesIdentification().subscribe(lis=>{
        this.typesIdentification = lis.response;
      })  
  }
    saveUser(){
    this.stateValidate = true;
    if(this.createUserForm.valid){
      this.spinner.show();
      if(this.validateComparePassword(this.createUserForm.controls.password.value+"")){
        const obj:any = this.createUserForm.value;
         obj.status = UC.statusUserDafault;
         obj.id_role = UC.roleUserDefault;
        this.service.saveUser(obj).subscribe(res=>{
          if(res.code == UC.C200){
            this.toast.success(res.message,UC.SUCCESSOPERATION);
            this.cleanForm();
            this.spinner.hide();
            this.stateValidate = false;
          }else if(res.code >=UC.C400 && res.code <=UC.C499){
            this.toast.warning(res.message,UC.WARNINGOPERATION);
          }else{
            this.toast.error(res.message,UC.ERROROPERATION);
          }
          });
        }else{
          this.toast.warning(UC.passwordNotEquals);
        }
    }
  }
  cleanForm(){
    this.createUserForm.reset();
  }
   validateComparePassword(value:string):boolean{
      const dataPassword = value.trim();
      const  dataConfirm = this.createUserForm.controls.confirm.value?.trim();
      if(dataPassword === dataConfirm){
          return true;
      }else{
          return false;
      }
  }
}

