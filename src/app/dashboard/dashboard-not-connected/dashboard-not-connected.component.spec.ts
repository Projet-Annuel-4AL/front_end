import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotConnectedComponent } from './dashboard-not-connected.component';

describe('DashboardNotConnectedComponent', () => {
  let component: DashboardNotConnectedComponent;
  let fixture: ComponentFixture<DashboardNotConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNotConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
