import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalInfoPage } from './hospital-info.page';

describe('HospitalInfoPage', () => {
  let component: HospitalInfoPage;
  let fixture: ComponentFixture<HospitalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
