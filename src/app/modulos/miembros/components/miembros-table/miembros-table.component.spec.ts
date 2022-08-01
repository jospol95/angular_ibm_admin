import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosTableComponent } from './miembros-table.component';

describe('MiembrosTableComponent', () => {
  let component: MiembrosTableComponent;
  let fixture: ComponentFixture<MiembrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
