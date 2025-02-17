import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Specification from '../model/specification.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  spec$: BehaviorSubject<Specification> = new BehaviorSubject(null);
  
  constructor(private http: HttpClient, private store: StoreService) {
    this.init();
  }

  public init(): void {
      let storedSpec = this.store.getSpecFromStore();
  
      // if available in local storage the use it 
      if(storedSpec!=null){
        this.updateSpec(storedSpec);
      }
      // else populate mock template
      else{
        this.getSpecification().subscribe(
          (spec:Specification) =>{
              this.updateSpec(spec);
          },
          (err)=>{
              console.error(err);
          },
          ()=>{
            console.log("completed specification call");
          });
      }
  }

  public getSpecification(): Observable<Specification>{
      return this.http.get("../../../asset/mock/dac.json");
  }

  public updateSpec(spec:Specification){
    this.spec$.next(spec);
  }

  public getSpec(){
    return this.spec$.value;
  }

  public persistSpec(spec:Specification){
    this.updateSpec(spec);
    this.store.saveSpecToStore(spec);
  }

  public deleteSpec(){
    this.spec$.next(null);
    this.store.deleteSpecFromStore();
  }

  public getSpec$(){
    return this.spec$;
  }
}
