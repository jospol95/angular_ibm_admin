import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuAuthComponent } from './nav-menu-auth.component';

describe('NavMenuAuthComponent', () => {
  let component: NavMenuAuthComponent;
  let fixture: ComponentFixture<NavMenuAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
