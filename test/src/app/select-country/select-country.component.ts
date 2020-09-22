import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyARecord } from 'dns';
import { Key } from 'protractor';
import { GlobalServicesService } from '../services/global-services.service';
import  {default as a}  from './myjsonfile.json';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {
  brews: Object;
  countryList: any = a;
  country: String;
  constructor(private router: Router, _http: GlobalServicesService) {}

   

  ngOnInit(): void {
    this.brews = this.countryList;
    console.log(this.brews);
    
    let select2: HTMLSelectElement = <HTMLSelectElement>document.getElementById("ddlCountry");
    let btngo: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitBtn");
    let ddm2: DropdownMenuButton = new DropdownMenuButton(select2);
    btngo.onclick = () => { 
         if(select2.selectedIndex == 0){
            window.alert("Please select a country!");
         }
         else{
          ddm2.OnChange();
          this.router.navigate(['/cchart']);
         }
    }  
    
}

}

class DropdownMenuButton {
  dropdownMenu: HTMLSelectElement;
  options: HTMLOptionsCollection;

  constructor(dropdown: HTMLSelectElement) {
      this.dropdownMenu = dropdown;
      this.options = dropdown.options;
      }
  OnChange() {
      var code = this.options[this.options.selectedIndex].value;
      sessionStorage.setItem("key",code.toString()); 
  } 
}
