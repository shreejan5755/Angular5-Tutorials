import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})

// 28 Angular Custom Validation
// export class ConfirmEqualValidatorDirective implements Validator{
//     @Input() appConfirmEqualValidator: string;
//     validate(control: AbstractControl): {[key:string]:any} | null{
//         const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
//         if(controlToCompare && controlToCompare.value !== control.value){
//             return {'notEqual': true};
//         }
//         return null;
//     }
// }

// 29 Angular form group validation
export class ConfirmEqualValidatorDirective implements Validator{   
    validate(passwordGroup: AbstractControl): {[key:string]:any} | null{
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');
        if(passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value){
            return {'notEqual': true};
        }
        return null;
    }
}