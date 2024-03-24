import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest43Component } from './quest43.component';

describe('Quest43Component', () => {
  let component: Quest43Component;
  let fixture: ComponentFixture<Quest43Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest43Component]
    });
    fixture = TestBed.createComponent(Quest43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
