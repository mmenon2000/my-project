import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterpageComponent } from './routerpage.component';

describe('RouterpageComponent', () => {
  let component: RouterpageComponent;
  let fixture: ComponentFixture<RouterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
