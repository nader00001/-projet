import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aceuil3Component } from './aceuil3.component';

describe('Aceuil3Component', () => {
  let component: Aceuil3Component;
  let fixture: ComponentFixture<Aceuil3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aceuil3Component]
    });
    fixture = TestBed.createComponent(Aceuil3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
