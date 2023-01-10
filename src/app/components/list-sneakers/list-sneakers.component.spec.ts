import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSneakersComponent } from './list-sneakers.component';

describe('ListSneakersComponent', () => {
  let component: ListSneakersComponent;
  let fixture: ComponentFixture<ListSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSneakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
