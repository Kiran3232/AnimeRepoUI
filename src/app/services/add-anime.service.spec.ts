import { TestBed } from '@angular/core/testing';

import { AddAnimeService } from './add-anime.service';

describe('AddAnimeService', () => {
  let service: AddAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
