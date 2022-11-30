import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Injectable({
  providedIn: 'root'
})
export class ProtheusService {

  private url = "/api/framework/environment/v1/branches"
  private url2 = "http://localhost:4222/rest/"

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) {

  }

  public getProtheus(){
    return this.http.get(`${this.url}`).toPromise();
  }

  public getProtheus2(){
    return this.http.get(`${this.url2}api/framework/environment/v1/branches"`).toPromise();
  }


}
