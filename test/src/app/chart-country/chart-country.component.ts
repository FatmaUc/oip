import { getLocaleDateTimeFormat, NgIf } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CountryServicesService } from '../services/country-services.service';
import moment from 'moment';
@Component({
  selector: 'app-chart-country',
  templateUrl: './chart-country.component.html',
  styleUrls: ['./chart-country.component.css']
})
export class ChartCountryComponent implements OnInit {
  country: String;
  update: String;
  ndate: String;
  death: any;
  recover: any;
  active: any;
  confirm: any;
  recover_rate: string;
  mortality_rate: string;
  active_rate: string;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes:[{}], yAxes: [{}]},
  };

  public barChartLabels: Label[]=[];
  public barChartType: ChartType='bar';
  public barChartLegend=true;
  public barChartData:ChartDataSets[]=[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + '';
        }
      }
    },
  };

  public pieChartLabels: Label[]=[];
  public pieChartType: ChartType='pie';
  public pieChartLegend = true;
  public pieChartData: number[]=[];
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255, 165, 0, 1)', 'rgba(0,255,0,0.3)', 'rgba(255,0,0,0.3)'],
    },
  ];
  constructor(private _http: CountryServicesService) { 
    
  
  }

  ngOnInit(): void {
    this.populateChart();
    
  }
  clean(){
    sessionStorage.clear();
  }
  populateChart(){
    this._http.getCountry(sessionStorage.getItem("key")).then(data => {
      this.barChartLabels = Object.values(data).map (key => key.country);
      this.country = (Object.values(data).map (key => key.country)).toString();
      let ndate = (Object.values(data).map (key => key.lastUpdated )).toString();
      console.log(data);
      let death = Object.values(data).map (key => key.totalDeaths);
      let recover = Object.values(data).map(key => key.totalRecovered);
      let active = Object.values(data).map (key => key.activeCases);
      let confirm = Object.values(data).map (key => key.totalConfirmed);

      this.death = death;
      this.recover = recover;
      this.active = active;
      this.confirm = confirm;

      this.update = moment(new Date(ndate)).format('YYYY-MM-DD hh:mm a').toString();

      this.active_rate = (Number(active)/Number(confirm)*100).toFixed(2);
      this.recover_rate = (Number(recover)/Number(confirm)*100).toFixed(2);
      this.mortality_rate = (Number(death)/Number(confirm)*100).toFixed(2);

      this.pieChartData = [Number(active),Number(recover),Number(death)]
      this.pieChartLabels = ["Active Rate","Recover Rate","Mortality Rate"]
       
      this.barChartData = [
        {
          data: confirm, label: 'Total Confirm'
        },
        {
          data: recover, label: 'Total Recover'
        },
        {
        data: death, label: 'Total Death'
      },
      {
        data: active, label: 'Total Active'
      }
      ]
    })
  }
}
