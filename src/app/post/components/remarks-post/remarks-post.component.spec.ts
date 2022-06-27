import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksPostComponent } from './remarks-post.component';

describe('RemarksPostComponent', () => {
  let component: RemarksPostComponent;
  let fixture: ComponentFixture<RemarksPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarksPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
