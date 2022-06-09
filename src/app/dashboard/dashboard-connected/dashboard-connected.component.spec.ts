import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConnectedComponent } from './dashboard-connected.component';

describe('DashboardConnectedComponent', () => {
  let component: DashboardConnectedComponent;
  let fixture: ComponentFixture<DashboardConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
