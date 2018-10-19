import { TestBed } from '@angular/core/testing';

import { PolicyAPIService } from './policy-api.service';

describe('PolicyAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyAPIService = TestBed.get(PolicyAPIService);
    expect(service).toBeTruthy();
  });
});
