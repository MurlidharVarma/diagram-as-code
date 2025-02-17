import { Injectable } from '@angular/core';
import Ajv from 'ajv';
import * as specSchema from '../../../asset/schema/dac.schema.json';
import Specification from '../model/specification.model';

@Injectable({
  providedIn: 'root'
})
export class SchemaValidatorService {

  ajv: any;
  validate: any;

  constructor() {
    this.ajv = new Ajv();
    this.validate = this.ajv.compile(specSchema);
  }

  public isValidSpec(data: Specification){
    let isValid = this.validate(data);

    if(!isValid){
      return{
        isValid,
        errors: this.validate.errors
      }
    }else{
      return{
        isValid,
        errors: null
      }
    }
  }
}
