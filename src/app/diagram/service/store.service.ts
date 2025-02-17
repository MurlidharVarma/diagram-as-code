import { Injectable } from '@angular/core';
import Specification from '../model/specification.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private KEY:string = "spec";

  constructor() { }

  public getSpecFromStore(): Specification | null{
    let spec = localStorage.getItem(this.KEY);
    if(spec && spec!=null){
      return JSON.parse(spec);
    }
    return null;
  }

  public saveSpecToStore(spec:Specification){
    let specStr = JSON.stringify(spec);
    localStorage.setItem(this.KEY, specStr);
  }

  public deleteSpecFromStore(){
    localStorage.removeItem(this.KEY);
  }

}
