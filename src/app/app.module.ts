import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ViewOrderedRatingsComponent } from './components/view-ordered-ratings/view-ordered-ratings.component';


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    EditMovieComponent,
    AddMovieComponent,
    SearchComponent,
    ViewOrderedRatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
