import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessQuoteComponent } from './process-quote.component';

describe('ProcessQuoteComponent', () => {
  let component: ProcessQuoteComponent;
  let fixture: ComponentFixture<ProcessQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
