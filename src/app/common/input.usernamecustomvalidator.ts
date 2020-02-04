import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameCustomValidatior{

    /* Below is the custom synchronous validator which will throw the current validator error
     it can be registered in form control object which we created in the ts file
    */

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return {cannotContainSpace: true}
        }
        return null;
    }

    /*
    Below is the example for asynchronous validator which will return the validator error object
    Using which we can configure our asynchronous validator at form control object
    */ 

    static shouldBeUnique(control: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value ==='mani')
                     resolve( {shouldBeUnique:true});
                     else
                     resolve(null);
                },2000);
        })
    }
    
}