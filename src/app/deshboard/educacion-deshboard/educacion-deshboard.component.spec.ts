import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDeshboardComponent } from './educacion-deshboard.component';

describe('EducacionDeshboardComponent', () => {
  let component: EducacionDeshboardComponent;
  let fixture: ComponentFixture<EducacionDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
