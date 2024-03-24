import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest34Component } from './quest34.component';

describe('Quest34Component', () => {
  let component: Quest34Component;
  let fixture: ComponentFixture<Quest34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest34Component]
    });
    fixture = TestBed.createComponent(Quest34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
