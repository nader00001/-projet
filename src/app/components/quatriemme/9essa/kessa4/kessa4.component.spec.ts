import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa4Component } from './kessa4.component';

describe('Kessa4Component', () => {
  let component: Kessa4Component;
  let fixture: ComponentFixture<Kessa4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa4Component]
    });
    fixture = TestBed.createComponent(Kessa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
