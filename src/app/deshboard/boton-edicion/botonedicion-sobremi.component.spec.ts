import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonedicionSobremiComponent } from './botonedicion-sobremi.component';

describe('BotonedicionSobremiComponent', () => {
  let component: BotonedicionSobremiComponent;
  let fixture: ComponentFixture<BotonedicionSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonedicionSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonedicionSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
