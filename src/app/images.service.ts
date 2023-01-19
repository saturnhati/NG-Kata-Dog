import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getImage() {
    return this.http.get<Data>('https://dog.ceo/api/breeds/image/random');
  }
}
