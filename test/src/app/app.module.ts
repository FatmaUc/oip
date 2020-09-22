import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ChartsModule } from 'ng2-charts';
import { BarGlobalComponent } from './bar-chart/bar-global/bar-global.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { MenuComponent } from './menu/menu.component';
import { MyComponent } from './my/my.component';
import { ChartCountryComponent } from './chart-country/chart-country.component';
import { Bar1Component } from './barchart/bar1/bar1.component';
import { Bar2Component } from './barchart/bar2/bar2.component';
import { UsComponent } from './us/us.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarGlobalComponent,
    SelectCountryComponent,
    MenuComponent,
    MyComponent,
    ChartCountryComponent,
    Bar1Component,
    Bar2Component,
    UsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
