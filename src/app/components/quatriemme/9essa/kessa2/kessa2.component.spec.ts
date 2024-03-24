import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kessa2Component } from './kessa2.component';

describe('Kessa2Component', () => {
  let component: Kessa2Component;
  let fixture: ComponentFixture<Kessa2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Kessa2Component]
    });
    fixture = TestBed.createComponent(Kessa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
