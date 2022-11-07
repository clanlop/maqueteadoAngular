import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesdeshboardComponent } from './redesdeshboard.component';

describe('RedesdeshboardComponent', () => {
  let component: RedesdeshboardComponent;
  let fixture: ComponentFixture<RedesdeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesdeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesdeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
