import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDeshboardComponent } from './proyecto-deshboard.component';

describe('ProyectoDeshboardComponent', () => {
  let component: ProyectoDeshboardComponent;
  let fixture: ComponentFixture<ProyectoDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
