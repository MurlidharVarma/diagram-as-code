import { Component, OnInit } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';
import { SchemaValidatorService } from '../../service/schema-validator.service';

@Component({
  selector: 'app-json-editor',
  standalone: false,
  templateUrl: './json-editor.component.html',
  styleUrl: './json-editor.component.scss'
})
export class JsonEditorComponent implements OnInit{

  spec: Specification | null = null;
  validation: any = null;


  constructor(private service: DiagramService, private schemaValidator: SchemaValidatorService){}

  public ngOnInit(){
    this.service.getSpec$().subscribe(spec=>{
      console.log("json editor calling getSpec$");
      this.validation = this.schemaValidator.isValidSpec(spec);
      this.spec = spec;
    })
  }

}
