import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest32Component } from './quest32.component';

describe('Quest32Component', () => {
  let component: Quest32Component;
  let fixture: ComponentFixture<Quest32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest32Component]
    });
    fixture = TestBed.createComponent(Quest32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
