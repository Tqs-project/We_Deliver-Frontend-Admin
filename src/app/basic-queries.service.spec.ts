import { TestBed } from '@angular/core/testing';

import { BasicQueriesService } from './basic-queries.service';

describe('BasicQueriesService', () => {
  let service: BasicQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(BasicQueriesService);
  });

});
