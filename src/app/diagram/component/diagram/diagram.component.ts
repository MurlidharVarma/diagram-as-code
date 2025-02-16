import { Component, Input } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';

@Component({
  selector: 'diagram',
  standalone: false,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent {
  @Input("spec")
  spec: Specification;

  constructor(private service: DiagramService){}

  public ngOnInit(): void {

  }
}
