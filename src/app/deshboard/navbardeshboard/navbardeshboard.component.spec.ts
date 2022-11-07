import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardeshboardComponent } from './navbardeshboard.component';

describe('NavbardeshboardComponent', () => {
  let component: NavbardeshboardComponent;
  let fixture: ComponentFixture<NavbardeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
