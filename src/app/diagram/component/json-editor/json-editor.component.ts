import { Component, OnInit } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';
import { SchemaValidatorService } from '../../service/schema-validator.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-json-editor',
  standalone: false,
  templateUrl: './json-editor.component.html',
  styleUrl: './json-editor.component.scss'
})
export class JsonEditorComponent implements OnInit{

  spec: Specification | null = null;
  specText: string;

  form:FormGroup;

  constructor(private service: DiagramService, private schemaValidator: SchemaValidatorService, private fb: FormBuilder){
    this.form = this.fb.group({
      "spec": ["",[this.validateSpec().bind(this)]]
    })
  }

  public ngOnInit(){
    this.service.getSpec$().subscribe(spec=>{
      let specText = JSON.stringify(spec,null,2);
      this.specText = specText;
      this.form.get("spec").setValue(specText);
    });

    this.form.valueChanges.subscribe(form => {
      let specText = this.form.get("spec").value;
      if(this.form.valid && this.specText!=specText){
        let spec = JSON.parse(specText);
        this.service.updateSpec(spec);
      }
    });
  }

  public validateSpec():ValidatorFn{
    return (control: AbstractControl)=>{
            let value = control.value;
            if(value && value!=null){
              let result = this.schemaValidator.isValidSpecText(value);
              if(!result.isValid){
                return result;
              }
            }
            return null;
          }
  }

}
