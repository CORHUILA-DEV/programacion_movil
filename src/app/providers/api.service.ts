import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20'

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.url)
  }
}
