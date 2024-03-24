import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aceuil4Component } from './aceuil4.component';

describe('Aceuil4Component', () => {
  let component: Aceuil4Component;
  let fixture: ComponentFixture<Aceuil4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aceuil4Component]
    });
    fixture = TestBed.createComponent(Aceuil4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
