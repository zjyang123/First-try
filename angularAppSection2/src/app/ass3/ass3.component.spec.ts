import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3Component } from './ass3.component';

describe('Ass3Component', () => {
  let component: Ass3Component;
  let fixture: ComponentFixture<Ass3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
