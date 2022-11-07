import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDeshboardComponent } from './banner-deshboard.component';

describe('BannerDeshboardComponent', () => {
  let component: BannerDeshboardComponent;
  let fixture: ComponentFixture<BannerDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
