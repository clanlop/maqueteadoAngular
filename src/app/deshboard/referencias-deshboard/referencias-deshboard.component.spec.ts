import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasDeshboardComponent } from './referencias-deshboard.component';

describe('ReferenciasDeshboardComponent', () => {
  let component: ReferenciasDeshboardComponent;
  let fixture: ComponentFixture<ReferenciasDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenciasDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
