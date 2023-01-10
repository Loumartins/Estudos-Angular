import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumber100Component } from './change-number100.component';

describe('ChangeNumber100Component', () => {
  let component: ChangeNumber100Component;
  let fixture: ComponentFixture<ChangeNumber100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumber100Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumber100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
