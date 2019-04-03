import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Rating} from '../../models/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {

  apiUrl: string = environment.endPoint;
  constructor(private httpClient: HttpClient) { }

  public getRatings() {
    return this.httpClient.get<Rating[]>(`${this.apiUrl}/getAllRatings`);
  }

  public getRatingById(id: number) {
    return this.httpClient.get(`${this.apiUrl}/getRating/${id}`);
  }
}
