import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPerfildeshboardComponent } from './foto-perfildeshboard.component';

describe('FotoPerfildeshboardComponent', () => {
  let component: FotoPerfildeshboardComponent;
  let fixture: ComponentFixture<FotoPerfildeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPerfildeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoPerfildeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
