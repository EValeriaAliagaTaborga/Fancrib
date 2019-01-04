import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FandomPage } from './fandom.page';

describe('FandomPage', () => {
  let component: FandomPage;
  let fixture: ComponentFixture<FandomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FandomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FandomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
