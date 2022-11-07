import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMideshboardComponent } from './sobre-mideshboard.component';

describe('SobreMideshboardComponent', () => {
  let component: SobreMideshboardComponent;
  let fixture: ComponentFixture<SobreMideshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMideshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMideshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
