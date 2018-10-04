import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appSelectValidator]',
    //registrering the validator
    providers: [{
        provide: NG_VALIDATORS,//opaque token contains list of all validators
        useExisting: SelectRequiredValidatorDirective,
        multi: true // to instruct angular to add the validator to the list
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
   
    //creating an input property to get the value of the default option
    // for creating input property we must have the same name as that of the directive from which the input is passed
    @Input() ('appSelectValidator') defaultValue: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // Remove the hard-coded value and use the input property instead
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }

}