import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FeedItem } from '../interfaces/feed-item';

export const API = 'https://node-hnapi.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTopItems(page: number = 1): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${API}/news?page=${page}`);
  }
}
