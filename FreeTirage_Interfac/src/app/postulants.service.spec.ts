import { TestBed } from '@angular/core/testing';

import { PostulantsService } from './postulants.service';

describe('PostulantsService', () => {
  let service: PostulantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
