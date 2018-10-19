import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBranchDetailsComponent } from './show-branch-details.component';

describe('ShowBranchDetailsComponent', () => {
  let component: ShowBranchDetailsComponent;
  let fixture: ComponentFixture<ShowBranchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBranchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBranchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
