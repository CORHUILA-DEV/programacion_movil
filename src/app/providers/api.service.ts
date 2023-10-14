import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private httpClient: HttpClient) { }


  getData() {
    return this.httpClient.get(this.url)
  }
}
