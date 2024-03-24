import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest31Component } from './quest31.component';

describe('Quest31Component', () => {
  let component: Quest31Component;
  let fixture: ComponentFixture<Quest31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest31Component]
    });
    fixture = TestBed.createComponent(Quest31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
