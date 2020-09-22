import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGlobalComponent } from './bar-global.component';

describe('BarGlobalComponent', () => {
  let component: BarGlobalComponent;
  let fixture: ComponentFixture<BarGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
