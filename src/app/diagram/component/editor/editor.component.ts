import { Component } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-editor',
  standalone: false,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  isActive: 'JSON'|'FORM' = "JSON";
  constructor(){}

  public ngOnInit(): void {}
}
