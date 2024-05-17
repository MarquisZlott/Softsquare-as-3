import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GethttpService {

  constructor( private http: HttpClient) { }

  getActivity() {
    return this.http.get<any>('https://www.boredapi.com/api/activity')
  }

  getDog() {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random')
  }

  getJoke() {
    return this.http.get<any>('https://official-joke-api.appspot.com/random_joke')
  }
}
