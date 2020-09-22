import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from '../services/global-services.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label} from 'ng2-charts';
import { CountryServicesService } from '../services/country-services.service';
import  us from './us.json';
import moment from 'moment';
@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  public countryDu:Object = us;
  lastUpdated: string;
  TotalDeaths: string;
  DailyDeaths: string;
  TotalConfirmed: string;
  DailyConfirmed: string;
  ActiveCases: string;
  TotalRecovered: string;

  date: string;

  startDate: string;
  endDate: string;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    maintainAspectRatio: false,
    title:{
      display:true,
      position:'left',
      text:'US chart'
    },
    legend: {
      position: 'top',
      align: 'start'
    },
    scales: { yAxes: [], xAxes: [] },
    
    };
    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartData:ChartDataSets[] = [];

    public barChartOptions2: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      title:{
        display:true,
        position:'left',
        text:'US chart'
      },
      legend: {
        position: 'top',
        align: 'start'
      },
      scales: { yAxes: [], xAxes: [] },
      
      };
      public barChartLabels2: Label[] = [];
      public barChartType2: ChartType = 'line';
      public barChartLegend2 = true;
      public barChartData2:ChartDataSets[] = [];

  constructor(private oip: GlobalServicesService, private http: CountryServicesService) { }

  ngOnInit(): void {
    this.getUSdata();
    this.getDuration();
  }

  populateChart2(){
    if(this.date == null){
      window.alert("Please enter the date.")
    }
    else{
      this.oip.getData(this.date).then(data=>{
        this.barChartLabels = Object.values(data).map(key=>key.state);
        let fips = Object.values(data).map(key => key.fips);
        let cases = Object.values(data).map(key => key.cases);
        let deaths = Object.values(data).map(key => key.deaths);
        this.barChartData = [
           {data:cases,label:'Confirmed Cases',order:1},
           {data:deaths,label:'Deaths Cases',order:2},
        ];
        console.log(data);
  })
    }
   
  
}
getUSdata(){
  this.http.getCountry("US").then(data=>{
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

lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
];

lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Define chart options
lineChartOptions: ChartOptions = {
  responsive: true
};

// Define colors of chart segments
lineChartColors: Color[] = [

  
];

lineChartLegend = true;
lineChartType = 'line';
lineChartPlugins = [];
chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

getDuration(){
  this.lineChartLabels = Object.values(this.countryDu).map(key=>key.LastUpdated);
  let deaths = Object.values(this.countryDu).map(key => key.Deaths);
  let recover = Object.values(this.countryDu).map(key => key.Recover);
  let confirmed = Object.values(this.countryDu).map(key => key.Confirmed);

  this.lineChartData = [ 
     {data:confirmed,label:'Confirmed Cases',order:1},       
     {data:recover,label:'Recovered Cases',order:2},
     {data:deaths,label:'Deaths Cases',order:3}
  ];
}



}