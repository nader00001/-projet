import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest41Component } from './quest41.component';

describe('Quest41Component', () => {
  let component: Quest41Component;
  let fixture: ComponentFixture<Quest41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest41Component]
    });
    fixture = TestBed.createComponent(Quest41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
