import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa32Component } from './kessa32.component';

describe('Kessa32Component', () => {
  let component: Kessa32Component;
  let fixture: ComponentFixture<Kessa32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa32Component]
    });
    fixture = TestBed.createComponent(Kessa32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
