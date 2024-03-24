import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KessasComponent } from './kessas.component';

describe('KessasComponent', () => {
  let component: KessasComponent;
  let fixture: ComponentFixture<KessasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KessasComponent]
    });
    fixture = TestBed.createComponent(KessasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
