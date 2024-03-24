import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa3Component } from './kessa3.component';

describe('Kessa3Component', () => {
  let component: Kessa3Component;
  let fixture: ComponentFixture<Kessa3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa3Component]
    });
    fixture = TestBed.createComponent(Kessa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
