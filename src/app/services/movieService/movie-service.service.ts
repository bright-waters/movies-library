import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Movies} from '../../models/Movies';
import {Rating} from '../../models/Rating';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  apiUrl: string = environment.endPoint;
  constructor(private httpClient: HttpClient) { }

  public createMovie(movie: Movies) {
    return this.httpClient.post(`${this.apiUrl}/postMovie/`, movie);
  }

  public updateMovie(movie: Movies) {
    return this.httpClient.put(`${this.apiUrl}/putMovie/`, movie);
  }

  public deleteMovie(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/deleteMovie/${id}`);
  }

  public getMovieById(id: number) {
    return this.httpClient.get(`${this.apiUrl}/getMovie/${id}`);
  }

  public getMovies() {
    return this.httpClient.get<Rating[]>(`${this.apiUrl}/getAllMovies`);
  }
}
