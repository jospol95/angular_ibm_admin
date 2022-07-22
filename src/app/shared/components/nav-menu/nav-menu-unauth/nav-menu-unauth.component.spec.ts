import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuUnauthComponent } from './nav-menu-unauth.component';

describe('NavMenuUnauthComponent', () => {
  let component: NavMenuUnauthComponent;
  let fixture: ComponentFixture<NavMenuUnauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuUnauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
