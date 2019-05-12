import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirInfoPage } from './bir-info.page';

describe('BirInfoPage', () => {
  let component: BirInfoPage;
  let fixture: ComponentFixture<BirInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
