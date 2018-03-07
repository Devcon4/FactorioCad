import { TestBed, inject } from '@angular/core/testing';

import { BlueprintBuilderService } from './blueprint-builder.service';

describe('BlueprintBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlueprintBuilderService]
    });
  });

  it('should be created', inject([BlueprintBuilderService], (service: BlueprintBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
