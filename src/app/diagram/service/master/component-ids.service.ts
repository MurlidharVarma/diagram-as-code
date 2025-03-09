import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ComponentIdsService {

    componentIds: BehaviorSubject<any> = new BehaviorSubject([]);
  
    constructor(private http: HttpClient) {
    }
  
    public componentIds$(){
      return this.componentIds;
    }
  
    public setCompomentIds(ids:[]){
      this.componentIds.next(ids.sort());
    }
  
    public getComponentTags(){
      return this.componentIds.value;
    }

    public addComponentId(id:string){
      let compids = this.getComponentTags();
      compids.push(id);
      this.setCompomentIds(compids);
    }
}
