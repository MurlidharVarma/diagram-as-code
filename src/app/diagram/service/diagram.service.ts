import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Specification from '../model/specification.model';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  constructor(private http: HttpClient) { }

  public getSpecification(): Observable<Specification>{
    console.log("service called");
      return this.http.get("../../../asset/mock/dac.json");
  }
}
