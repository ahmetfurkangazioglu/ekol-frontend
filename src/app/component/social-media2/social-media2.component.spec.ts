import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMedia2Component } from './social-media2.component';

describe('SocialMedia2Component', () => {
  let component: SocialMedia2Component;
  let fixture: ComponentFixture<SocialMedia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMedia2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMedia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
