import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {
  url="https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19kkm/1.0.0/base"
  token = "Bearer 4756df2a-568f-3b3c-a4e5-56dcf4eb9f0f";
  url2="https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19usa/1.0.0/us/state/";
 constructor(private http:HttpClient) { }
  urlMY="https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/worldometer/country?countryCode=MY";
  tokenMY="Bearer 5cabaa42-50a6-332b-be50-f6ac10000ad3";

getData(str: string){
 return this.http.get(`${this.url2 + str}`,{headers:{
   Authorization:this.token}}).toPromise();
}
getData2(){
 return this.http.get(`${this.url}`,{headers:{
   Authorization:this.token}}).toPromise();
}
getMY(){
  return this.http.get(`${this.urlMY}`,{headers:{
    Authorization:this.tokenMY}}).toPromise();
}
}
