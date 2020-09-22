import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BarGlobalComponent } from './bar-chart/bar-global/bar-global.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { MyComponent } from './my/my.component';
import { ChartCountryComponent } from './chart-country/chart-country.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'select', component: SelectCountryComponent},
  { path: 'malaysia', component: MyComponent },
  { path: 'cchart', component: ChartCountryComponent},
  { path: 'usa', component: UsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
