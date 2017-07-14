import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area3Component } from './area3.component';

describe('Area3Component', () => {
  let component: Area3Component;
  let fixture: ComponentFixture<Area3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
