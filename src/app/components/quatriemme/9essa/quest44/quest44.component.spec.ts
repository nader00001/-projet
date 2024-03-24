import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest44Component } from './quest44.component';

describe('Quest44Component', () => {
  let component: Quest44Component;
  let fixture: ComponentFixture<Quest44Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest44Component]
    });
    fixture = TestBed.createComponent(Quest44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
