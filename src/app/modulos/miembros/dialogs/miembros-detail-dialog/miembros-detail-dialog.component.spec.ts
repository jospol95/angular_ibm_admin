import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosDetailDialogComponent } from './miembros-detail-dialog.component';

describe('MiembrosDetailDialogComponent', () => {
  let component: MiembrosDetailDialogComponent;
  let fixture: ComponentFixture<MiembrosDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembrosDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
