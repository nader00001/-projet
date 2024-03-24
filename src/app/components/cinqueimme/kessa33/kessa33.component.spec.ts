import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa33Component } from './kessa33.component';

describe('Kessa33Component', () => {
  let component: Kessa33Component;
  let fixture: ComponentFixture<Kessa33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa33Component]
    });
    fixture = TestBed.createComponent(Kessa33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
