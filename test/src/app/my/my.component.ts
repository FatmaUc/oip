import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label} from 'ng2-charts';
import  my from './malaysia.json';
import moment from 'moment';
import { Router } from '@angular/router';
import { CountryServicesService } from '../services/country-services.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  public countryDu:Object = my;
  lastUpdated: string;
  TotalDeaths: string;
  DailyDeaths: string;
  TotalConfirmed: string;
  DailyConfirmed: string;
  ActiveCases: string;
  TotalRecovered: string;
  startDate: string;
  endDate: string;
  newData: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    maintainAspectRatio: false,
    title:{
      display:true,
      position:'left',
      text:'Malaysia Chart'
    },
    legend: {
      position: 'top',
      align: 'start'
    },
    

    scales: { xAxes: [], yAxes: [] },
    
    };
    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'line';
    public barChartLegend = true;
    public barChartData:ChartDataSets[] = [];
    
  constructor(private oip: CountryServicesService, private router: Router, private http: HttpClient, private _api: ApiService) { }

  rootURL='/api';

  ngOnInit(): void { 
    this.populateChart();
    this.getMYdata();
    console.log(this.countryDu); 
    this._api.getJSONfile();
  }
  populateChart(){
      this.barChartLabels = Object.values(this.countryDu).map(key=>key.LastUpdated);
      let deaths = Object.values(this.countryDu).map(key => key.Deaths);
      let recover = Object.values(this.countryDu).map(key => key.Recover);
      let confirmed = Object.values(this.countryDu).map(key => key.Confirmed);

      this.barChartData = [ 
         {data:confirmed,label:'Confirmed Cases',order:1},       
         {data:recover,label:'Recovered Cases',order:2},
         {data:deaths,label:'Deaths Cases',order:3}
      ];
}
  getDate(){
      if(this.startDate == null || this.endDate == null ){
        window.alert("Please enter date.");
      }
      else{
        sessionStorage.setItem("sDate",this.startDate);
        sessionStorage.setItem("eDate",this.endDate);
        this.router.navigate(['/malaysia/se']);
      }
      
  }
  getMYdata(){
    
    this.oip.getCountry("MY").then(data=>{
      this.TotalDeaths = Object.values(data).map(key => key.totalDeaths).toLocaleString();
      this.DailyDeaths = Object.values(data).map(key => key.dailyDeaths).toLocaleString();
      this.TotalConfirmed = Object.values(data).map(key => key.totalConfirmed).toLocaleString();
      this.DailyConfirmed = Object.values(data).map(key => key.dailyConfirmed).toLocaleString();
      this.TotalRecovered = Object.values(data).map(key => key.totalRecovered).toLocaleString();
      this.ActiveCases = Object.values(data).map(key => key.activeCases).toLocaleString();
      console.log(data);
      
      let Updated = Object.values(data).map(key => key.lastUpdated).toString();
      this.lastUpdated = moment(new Date(Updated)).format('YYYY-MM-DD hh:mm a').toString();
    })
  }
 
}

