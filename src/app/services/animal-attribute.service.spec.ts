import { TestBed, inject } from '@angular/core/testing';

import { AnimalAttributeService } from './animal-attribute.service';

describe('AnimalAttributeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalAttributeService]
    });
  });

  it('should be created', inject([AnimalAttributeService], (service: AnimalAttributeService) => {
    expect(service).toBeTruthy();
  }));
});
