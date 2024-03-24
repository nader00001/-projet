import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa31Component } from './kessa31.component';

describe('Kessa31Component', () => {
  let component: Kessa31Component;
  let fixture: ComponentFixture<Kessa31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa31Component]
    });
    fixture = TestBed.createComponent(Kessa31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
