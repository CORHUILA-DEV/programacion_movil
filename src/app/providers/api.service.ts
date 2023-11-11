import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonRequest } from '../entities/person.request';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData(params: PersonRequest): Observable<any> {
    return this.httpClient.get(params.url + params.limit);
  }
}
