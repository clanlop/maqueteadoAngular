import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesDeshboardComponent } from './habilidades-deshboard.component';

describe('HabilidadesDeshboardComponent', () => {
  let component: HabilidadesDeshboardComponent;
  let fixture: ComponentFixture<HabilidadesDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
