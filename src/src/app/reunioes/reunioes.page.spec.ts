import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesPage } from './reunioes.page';

describe('ReunioesPage', () => {
  let component: ReunioesPage;
  let fixture: ComponentFixture<ReunioesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunioesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
