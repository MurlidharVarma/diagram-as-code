import { Component, Input } from '@angular/core';
import Group from '../../model/group.model';

@Component({
  standalone: false,
  selector: 'box-group',
  templateUrl: './box-group.component.html',
  styleUrl: './box-group.component.scss'
})
export class BoxGroupComponent {
  @Input("group")
  group: Group | undefined;

  constructor(){}

}
