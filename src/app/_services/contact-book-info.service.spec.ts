import { TestBed } from '@angular/core/testing';

import { ContactBookInfoService } from './contact-book-info.service';

describe('ContactBookInfoService', () => {
  let service: ContactBookInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactBookInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
