import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest33Component } from './quest33.component';

describe('Quest33Component', () => {
  let component: Quest33Component;
  let fixture: ComponentFixture<Quest33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest33Component]
    });
    fixture = TestBed.createComponent(Quest33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
