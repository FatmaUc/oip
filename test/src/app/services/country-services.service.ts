import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CountryServicesService {

  url = "https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/worldometer/country?";
  token = "Bearer 5cabaa42-50a6-332b-be50-f6ac10000ad3";
  token2 = "Bearer f25ecaa2-193b-30cd-b2d7-f88aa6a6f07f";
  constructor(private http: HttpClient) { }

  urlUS = 'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country?startDate=2020-01-01&endDate=2020-12-31&countryCode=US';

  travel = 'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/travel-alert';
  
  getCountry(country:String){
    return this.http.get(`${this.url + 'countryCode=' + country}`,{ headers: {Authorization: this.token}}).toPromise();
  }
  getDuration(){
    return this.http.get(`${this.urlUS}`,{ headers: {Authorization: this.token}}).toPromise();
  }
  getDt(start:string,end:string,code:string){
    return this.http.get(`${'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country?startDate=' + start + '&endDate=' + end + '&countryCode=MY'}`,{ headers: {Authorization: this.token2}}).toPromise();
  }

}
