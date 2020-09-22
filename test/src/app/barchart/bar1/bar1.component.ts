import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label} from 'ng2-charts';
import { GlobalServicesService } from 'src/app/services/global-services.service';
@Component({
  selector: 'app-bar1',
  templateUrl: './bar1.component.html',
  styleUrls: ['./bar1.component.css']
})
export class Bar1Component implements OnInit {
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
    
  constructor(private oip: GlobalServicesService) { }

  ngOnInit(): void {
    this.populateChart();
  }

  populateChart(){
    this.oip.getData2().then(data=>{
      this.barChartLabels = Object.values(data).map(key=>key.Date);
      let deaths = Object.values(data).map(key => key.Death);
      let negative = Object.values(data).map(key => key.Negative);
      let positive = Object.values(data).map(key => key.Positive);

      this.barChartData = [
         {data:negative,label:'Negative',order:1},
      ];
})
  }
}
