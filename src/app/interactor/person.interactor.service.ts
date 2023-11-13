import { Injectable } from '@angular/core';
import { ApiEnvironment } from '../constants/api-environment.constants';
import { PersonRequest } from '../entities/person.request';
import { ApiService } from '../providers/api.service';

@Injectable({
  providedIn: 'root',
})
export class PersonInteractorService {
  private readonly API = ApiEnvironment;
  constructor(private apiService: ApiService) {}

  getData<T = unknown>(): Promise<T> {
    const params: PersonRequest = {
      url: this.API.URL,
      limit: this.API.LIMIT,
    };

    return this.apiService.getData(params.url + params.limit);
  }
}
