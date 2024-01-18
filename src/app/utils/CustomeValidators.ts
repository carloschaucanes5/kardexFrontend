import { FormControl,Validator,AbstractControl,ValidationErrors } from "@angular/forms";

export class CustumeValidators {

    static validatorNumericField(control:AbstractControl):ValidationErrors | null {
        const val =  parseInt(control.value+"");
        if(Number(val)){
            return null;
        }
        return {'validatorNumericField':true}
    }
    static validatorOnlyLetter(control:AbstractControl):ValidationErrors| null{
        var data = control.value;
         var valid = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(data);
        if(valid){
            return null;
        }
        return {'validatorOnlyLetter':true}
    }
    //Minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito,No espacios en blanco, al menos 1 caracter especial
    static validatorPassword(control:AbstractControl):ValidationErrors|null{
        var data = control.value;
        var valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(data);
        if(valid){
            return null;
        }
        return {'validatorPassword':true}
    }
    
}
