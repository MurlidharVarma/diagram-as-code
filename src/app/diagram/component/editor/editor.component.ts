import { Component } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';

@Component({
  selector: 'app-editor',
  standalone: false,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
 spec: Specification | null = {};

  constructor(private service: DiagramService){}

  public ngOnInit(): void {
    this.service.getSpecification().subscribe(
    (spec:Specification) =>{
        this.spec = spec;
    },
    (err)=>{
        console.error(err);
    },
    ()=>{
      console.log("completed specification call");
    });
  }
}
