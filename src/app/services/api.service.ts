import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL, API_KEY, LANGUAGE, PARAMETERS } from './service.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get(`${BASEURL}genre/movie/list${PARAMETERS}`);
  }

  getAllContents(type: string | undefined, currentPage: number | undefined): Observable<any> {
    return this.http.get(`${BASEURL}discover/${type}${PARAMETERS}&page=${currentPage}`)
  }

  getMovieDetail(type: string ,movieId: number): Observable<any> {
    return this.http.get(`${BASEURL}${type}/${movieId}${PARAMETERS}`)
  }

  searchMovies(type: string, query: string): Observable<any> {
    return this.http.get(`${BASEURL}search/${type}${PARAMETERS}&query=${query}`)
  }
}
