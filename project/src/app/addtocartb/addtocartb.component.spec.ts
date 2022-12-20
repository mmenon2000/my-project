import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartbComponent } from './addtocartb.component';

describe('AddtocartbComponent', () => {
  let component: AddtocartbComponent;
  let fixture: ComponentFixture<AddtocartbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
