import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/worldometer/global";
  token = "Bearer f25ecaa2-193b-30cd-b2d7-f88aa6a6f07f"
  constructor(private http: HttpClient) { }

  getGlobalResult(){
    return this.http.get(`${this.url}`,{ headers: {Authorization: this.token}}).toPromise();
    
  }
  
}
