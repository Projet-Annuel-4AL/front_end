import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotConnectedComponent } from './dialog-not-connected.component';

describe('DialogNotConnectedComponent', () => {
  let component: DialogNotConnectedComponent;
  let fixture: ComponentFixture<DialogNotConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNotConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNotConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
