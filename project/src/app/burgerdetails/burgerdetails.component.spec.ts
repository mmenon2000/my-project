import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerdetailsComponent } from './burgerdetails.component';

describe('BurgerdetailsComponent', () => {
  let component: BurgerdetailsComponent;
  let fixture: ComponentFixture<BurgerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
