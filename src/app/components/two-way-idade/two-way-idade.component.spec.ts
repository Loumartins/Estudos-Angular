import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayIdadeComponent } from './two-way-idade.component';

describe('TwoWayIdadeComponent', () => {
  let component: TwoWayIdadeComponent;
  let fixture: ComponentFixture<TwoWayIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayIdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
