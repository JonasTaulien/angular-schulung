import {TestBed} from '@angular/core/testing';

import {InitialListService} from './initial-list.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('InitialListService', () => {
  let service: InitialListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InitialListService]
    });
    service = TestBed.inject(InitialListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should load the datasources', () => {
    const expectedList = ['A', 'B', 'C'];

    service
      .getInitialList()
      .subscribe(initialList => expect(initialList).toEqual(expectedList));

    const req = httpTestingController.expectOne('http://localhost:8888/datasources');

    expect(req.request.method).toEqual('GET');

    req.flush([
      {
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      },
      {
        id: 3,
        name: 'C'
      }
    ]);

    httpTestingController.verify();
  });
});
