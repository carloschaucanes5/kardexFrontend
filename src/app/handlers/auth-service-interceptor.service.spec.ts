import { TestBed } from '@angular/core/testing';

import { AuthServiceInterceptorService } from './auth-service-interceptor.service';

describe('AuthServiceInterceptorService', () => {
  let service: AuthServiceInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
