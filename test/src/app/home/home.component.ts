import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { KeyObject } from 'crypto';
import { Key } from 'protractor';
import { threadId } from 'worker_threads';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: any;
  totalDeaths: String;
  totalRecovered: number;
  totalConfirmed: number;

  title = "Home Page";
  constructor(private _http: DataService) { }
  
  ngOnInit() {
   this.populateChart();
    
  }

  populateChart(){
    this._http.getGlobalResult().then(data => { 
      this.user = data;
      this.totalConfirmed = this.user.totalConfirmed.toLocaleString();    
      let deaths = this.user["totalDeaths"];  
      let recovered = this.user["totalRecovered"];
      console.log(this.user);
      
      this.totalDeaths = deaths.toLocaleString();
      this.totalRecovered = recovered.toLocaleString();
    }).catch(error=>{
      console.log(error);
    }) 
  }


}
