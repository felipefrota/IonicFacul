import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaPage } from './ata.page';

describe('AtaPage', () => {
  let component: AtaPage;
  let fixture: ComponentFixture<AtaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
