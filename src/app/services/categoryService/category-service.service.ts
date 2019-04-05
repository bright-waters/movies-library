import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../models/Category';
import {environment} from '../../../environments/environment';
import {Movies} from '../../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  apiUrl: string = environment.endPoint;
  constructor(private httpClient: HttpClient) { }

  public getCategories() {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/getAllCategories`);
  }

  public getCategoryById(id: number) {
    return this.httpClient.get<Movies>(`${this.apiUrl}/getCategory/${id}`);
  }
}
