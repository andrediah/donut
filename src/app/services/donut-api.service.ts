import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donut } from '../Interfaces/Donut';
import { DonutDetail } from '../Interfaces/DonutDetail';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  constructor(private httpClient:HttpClient) { }
  getDonutList(): Observable<Donut> {
    let returnVar =  this.httpClient.get<Donut>(environment.apiEndpoint);
    return returnVar;
  }
  getDonutDetail(id:number): Observable<DonutDetail> {
    let returnVar =  this.httpClient.get<DonutDetail>(environment.donutDetailUrl + id + '.json');
    return returnVar;
  }
}
