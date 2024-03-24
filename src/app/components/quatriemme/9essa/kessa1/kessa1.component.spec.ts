import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa1Component } from './kessa1.component';

describe('Kessa1Component', () => {
  let component: Kessa1Component;
  let fixture: ComponentFixture<Kessa1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa1Component]
    });
    fixture = TestBed.createComponent(Kessa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
