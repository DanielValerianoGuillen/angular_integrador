import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoReporteComponent } from './nuevo-reporte.component';

describe('NuevoReporteComponent', () => {
  let component: NuevoReporteComponent;
  let fixture: ComponentFixture<NuevoReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
