import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  rootURL= '/api'

  getJSONfile(){
    return this.http.get(this.rootURL + '/my');
  }
}
