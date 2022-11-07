import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDeshboardComponent } from './experiencia-deshboard.component';

describe('ExperienciaDeshboardComponent', () => {
  let component: ExperienciaDeshboardComponent;
  let fixture: ComponentFixture<ExperienciaDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
