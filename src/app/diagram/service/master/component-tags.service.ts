import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentTagsService {

   componentTags: BehaviorSubject<any> = new BehaviorSubject([]);
  
    constructor(private http: HttpClient) {
      this.init();
    }
  
    private init(){
        this.http.get("../../../asset/configurations/config.json").subscribe(
          (data:any)=>{
          this.componentTags.next(data['componentTags']);
          },
          (err) =>{
            console.error("Error fetching Component Tags: ",err);
          }
        )
    }
  
    public componentTags$(){
      return this.componentTags;
    }
  
    public setComponentTags(types:[]){
      this.componentTags.next(types);
    }
  
    public getComponentTags(){
      return this.componentTags.value;
    }
}
