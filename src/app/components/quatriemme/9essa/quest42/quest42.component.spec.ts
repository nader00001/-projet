import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest42Component } from './quest42.component';

describe('Quest42Component', () => {
  let component: Quest42Component;
  let fixture: ComponentFixture<Quest42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quest42Component]
    });
    fixture = TestBed.createComponent(Quest42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
