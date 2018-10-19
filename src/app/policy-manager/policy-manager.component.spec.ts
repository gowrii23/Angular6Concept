import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyManagerComponent } from './policy-manager.component';

describe('PolicyManagerComponent', () => {
  let component: PolicyManagerComponent;
  let fixture: ComponentFixture<PolicyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
