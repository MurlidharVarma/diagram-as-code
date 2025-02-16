import { Component, ElementRef, Input } from '@angular/core';
import Box from '../../model/box.model';

@Component({
  selector: 'box',
  standalone: false,
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {

  @Input("box")
  box: Box | undefined;

  constructor(public elementRef: ElementRef){}


}
