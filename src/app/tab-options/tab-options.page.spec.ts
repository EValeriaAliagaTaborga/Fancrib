import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOptionsPage } from './tab-options.page';

describe('TabOptionsPage', () => {
  let component: TabOptionsPage;
  let fixture: ComponentFixture<TabOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
