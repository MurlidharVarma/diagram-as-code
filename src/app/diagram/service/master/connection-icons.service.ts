import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionIconsService {

   connectionIcons: BehaviorSubject<any> = new BehaviorSubject([]);
  
    constructor(private http: HttpClient) {
      this.init();
    }
  
    private init(){
        this.http.get("../../../asset/configurations/config.json").subscribe(
          (data:any)=>{
          this.connectionIcons.next(data['connectionIcons']);
          },
          (err) =>{
            console.error("Error fetching Connection Icons: ",err);
          }
        )
    }
  
    public connectionIcons$(){
      return this.connectionIcons;
    }
  
    public setConnectionIcons(types:[]){
      this.connectionIcons.next(types);
    }
  
    public getConnectionIcons(){
      return this.connectionIcons.value;
    }
}
