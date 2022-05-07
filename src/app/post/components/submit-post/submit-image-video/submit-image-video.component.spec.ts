import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitImageVideoComponent } from './submit-image-video.component';

describe('SubmitImageVideoComponent', () => {
  let component: SubmitImageVideoComponent;
  let fixture: ComponentFixture<SubmitImageVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitImageVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitImageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
