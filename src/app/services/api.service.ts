import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  URL_CHARACTERS: string = "https://rickandmortyapi.com/api/character";

  getCharacters(query = '', page = 200): Observable<any>{
    return this.httpClient.get(`${this.URL_CHARACTERS}/?name=${query}&page=${2}`).pipe(res=> res);
  }
}
