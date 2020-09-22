import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountryComponent } from './chart-country.component';

describe('ChartCountryComponent', () => {
  let component: ChartCountryComponent;
  let fixture: ComponentFixture<ChartCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
