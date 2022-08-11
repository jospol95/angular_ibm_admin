import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosUploadPageComponent } from './miembros-upload-page.component';

describe('MiembrosUploadPageComponent', () => {
  let component: MiembrosUploadPageComponent;
  let fixture: ComponentFixture<MiembrosUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosUploadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembrosUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
