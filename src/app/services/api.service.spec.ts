import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService, API } from './api.service';
import { FeedItem } from '../interfaces/feed-item';

interface Type {
  type: string;
  serviceMethod: string;
  path: string;
}

const types: Type[] = [
  { type: 'top', serviceMethod: 'getTopItems', path: 'news' },
];

const mockItems: FeedItem[] = [{
  id: 1,
  title: 'Breaking news',
  points: 0,
  user: '',
  time: 0,
  time_ago: '',
  comments_count: 0,
  type: '',
  url: '',
  domain: '',
}, {
  id: 2,
  title: 'Just an update',
  points: 0,
  user: '',
  time: 0,
  time_ago: '',
  comments_count: 0,
  type: '',
  url: '',
  domain: '',
}];

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  types.forEach(object => {
    it(`should get first page of ${object.type} items`, inject([ApiService, HttpTestingController], (
      apiService: ApiService,
      httpMock: HttpTestingController,
    ) => {
      apiService[object.serviceMethod]().subscribe(items => {
        expect(items).toEqual(mockItems);
        expect(items[0].id).toBe(1);
        expect(items[1].id).toBe(2);
      });

      const mockReq = httpMock.expectOne(`${API}/${object.path}?page=1`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
    }));
  });

  types.forEach(object => {
    it(`should get second page of ${object.type} items`, inject([ApiService, HttpTestingController], (
      apiService: ApiService,
      httpMock: HttpTestingController,
    ) => {
      apiService[object.serviceMethod](2).subscribe(items => {
        expect(items).toEqual(mockItems);
        expect(items[0].id).toBe(1);
        expect(items[1].id).toBe(2);
      });

      const mockReq = httpMock.expectOne(`${API}/${object.path}?page=2`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
    }));
  });
});
