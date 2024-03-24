import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa34Component } from './kessa34.component';

describe('Kessa34Component', () => {
  let component: Kessa34Component;
  let fixture: ComponentFixture<Kessa34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa34Component]
    });
    fixture = TestBed.createComponent(Kessa34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
