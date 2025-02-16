import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import Group from '../../model/group.model';
import { BoxComponent } from '../box/box.component';

@Component({
  standalone: false,
  selector: 'box-group',
  templateUrl: './box-group.component.html',
  styleUrl: './box-group.component.scss'
})
export class BoxGroupComponent {
  @Input("group")
  group: Group | undefined;

  @ViewChildren(BoxComponent) boxes: QueryList<BoxComponent>;

  constructor(){}

}
