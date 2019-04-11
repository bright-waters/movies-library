import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Movies} from '../../models/Movies';
import {Observable} from 'rxjs';
import {RatingResults} from '../../models/RatingResults';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  apiUrl: string = environment.endPoint;
  constructor(private httpClient: HttpClient) { }

  public createMovie(movie: Movies) {
    return this.httpClient.post(`${this.apiUrl}/postMovie/`, movie);
  }

  public updateMovie(movie: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/putMovie`, JSON.stringify(movie), httpOptions);
  }

  public deleteMovie(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/deleteMovie/${id}`);
  }

  public getMovieById(id: number): Observable<any> {
  return this.httpClient.get<Movies>(`${this.apiUrl}/getMovie/${id}`);
  }

  public getMovies() {
    return this.httpClient.get<Movies[]>(`${this.apiUrl}/getAllMovies`);
  }

  public search(name?: string, category?: string) {
    return this.httpClient.get<Movies[]>(`${this.apiUrl}/search/${name}/${category}`);
  }

  public GroupByRatings(){
    return this.httpClient.get<RatingResults[]>(`${this.apiUrl}/getGroupedMovies/`);
    }
}
