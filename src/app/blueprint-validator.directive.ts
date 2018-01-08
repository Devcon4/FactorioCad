import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { isBase64 } from 'validator';
@Directive({
  selector: '[appBlueprint]',
  providers: [{provide: NG_VALIDATORS, useExisting: BlueprintValidatorDirective, multi: true}]
})
export class BlueprintValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    return blueprintValidator()(control);
  }
  constructor() { }

}

export function blueprintValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const blueprint = isBase64(control.value.substring(1, control.value.length));
    return blueprint ? {'blueprint': {value: control.value}} : null;
  };
}