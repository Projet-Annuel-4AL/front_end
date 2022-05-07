import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTextComponent } from './submit-text.component';

describe('SubmitTextComponent', () => {
  let component: SubmitTextComponent;
  let fixture: ComponentFixture<SubmitTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
