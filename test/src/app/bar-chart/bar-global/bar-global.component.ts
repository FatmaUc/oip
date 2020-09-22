import { Component, OnInit } from '@angular/core';
import { ChartColor, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Key } from 'protractor';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bar-global',
  templateUrl: './bar-global.component.html',
  styleUrls: ['./bar-global.component.css']
})
export class BarGlobalComponent implements OnInit {
  user: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}]},
  };
  public barChartLabels: Label [] = [];

  public barChartType: ChartType ='bar';

  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
  ];
  
  constructor(private oip: DataService) { }

 
  ngOnInit(): void {
    this.populateChart();   
  }

  populateChart(){
    this.oip.getGlobalResult().then(data => { 
      this.user = data;
      let confirmed = this.user["totalConfirmed"];    
      let deaths = this.user["totalDeaths"];  
      let recovered = this.user["totalRecovered"];
      
      this.barChartLabels = ['Total Confirmed','Total Recovered','Total Deaths'];
      this.barChartData = [ 
        {data: confirmed, label: 'Total Confirmed', order:1},
        {data: recovered, label: 'Total Recovered', order:2},        
        {data: deaths, label: 'Total Deaths', order:3,}
      ];
    }).catch(error=>{
      console.log(error);
    }) 
  }

}
