import { AbstractControl, Validator, Validators, ValidationErrors } from '@angular/forms';


export class UsernameCustomValidatior{

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace: true}
        }
        return null;
    }
}