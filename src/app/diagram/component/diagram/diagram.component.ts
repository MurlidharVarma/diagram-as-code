import { AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import Specification from '../../model/specification.model';
import { DiagramService } from '../../service/diagram.service';
import { BoxGroupComponent } from '../box-group/box-group.component';
import { style } from '@angular/animations';
// import LeaderLine from "leader-line";
declare var LeaderLine:any;

@Component({
  selector: 'diagram',
  standalone: false,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent implements AfterViewInit{
  @Input("spec")
  spec: Specification;

  @ViewChildren(BoxGroupComponent) boxGroups?: QueryList<BoxGroupComponent>;

  boxMap:any = {};

  lines:any = [];

  lineOptions = {
    "default" :{
        color: 'black',
        size: 1,
        dash: true,
        path: "fluid",
        outline: false,
        endPlugOutline: false,
        endPlugSize: 1.5,
    }
  }

  constructor(private service: DiagramService){}

  public ngAfterViewInit(): void {
    console.log("list child", this.boxGroups)
    this.boxGroups.changes.subscribe(()=>{
      this.populateBoxMap();
      this.drawConnections();
    });
  }

  populateBoxMap(){
    this.boxMap = {};
    this.boxGroups.forEach((group)=>{
      group.boxes.forEach((box)=>{
        this.boxMap[box.box.id]=box.elementRef.nativeElement;
        this.boxMap[box.box.name]=box.elementRef.nativeElement;
      })
    });
    console.log(this.boxMap);
  }

  drawConnections(){
    this.lines = [];
    this.spec.connections.forEach((connection)=>{
        let src = this.boxMap[connection.src];
        let dest = this.boxMap[connection.dest];
        let option = this.lineOptions["default"];

        if(src && src!=null && dest && dest!=null && option && option!=null){
          let line = new LeaderLine(src,dest,option);
          this.lines.push(line);
        }
    });

    console.log(this.lines);
  }
}
