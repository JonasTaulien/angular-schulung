import { TestBed } from '@angular/core/testing';

import { DatasourceStatusService } from './datasource-status.service';

describe('DatasourceStatusService', () => {
  let service: DatasourceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasourceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
