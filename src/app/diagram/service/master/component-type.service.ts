import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentTypeService {

  componentTypes: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.init();
  }

  private init(){
      this.http.get("../../../asset/configurations/config.json").subscribe(
        (data:any)=>{
          this.componentTypes.next(data['componentTypes']);
        },
        (err) =>{
          console.error("Error fetching Component Types: ",err);
        }
      )
  }

  public componentTypes$(){
    return this.componentTypes;
  }

  public setComponentTypes(types:[]){
    this.componentTypes.next(types);
  }

  public getComponentTypes(){
    return this.componentTypes.value;
  }

}
