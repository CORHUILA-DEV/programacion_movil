import { TestBed } from '@angular/core/testing';

import { PersonInteractorService } from './person.interactor.service';

describe('PersonInteractorService', () => {
  let service: PersonInteractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonInteractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
