import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  URL_CHARACTERS: string = "https://rickandmortyapi.com/api/character";
  URL_EPISODE: string = "https://rickandmortyapi.com/api/episode";

  getCharacters(page:number): Observable<any>{
    return this.httpClient.get(`${this.URL_CHARACTERS}/?page=${page}`).pipe(res=> res);
  }

  getChar(id: number): Observable<any>{
    return this.httpClient.get(`${this.URL_CHARACTERS}/${id}`).pipe(res=> res);
  }

  getEpisodes(page:number): Observable<any>{
    return this.httpClient.get(`${this.URL_EPISODE}/?page=${page}`).pipe(res=> res);
  }

  getEpisode(id: number): Observable<any>{
    return this.httpClient.get(`${this.URL_EPISODE}/${id}`).pipe(res=> res);
  }

  filterChar(page:any, name: any): Observable<any>{
    return this.httpClient.get(`${this.URL_CHARACTERS}/?page=${page}&name=${name}`).pipe(res=> res);
  }

}
