import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  URL_CHARACTERS: string = "https://rickandmortyapi.com/api/character";

  getCharacters(page:number): Observable<any>{
    return this.httpClient.get(`${this.URL_CHARACTERS}/?page=${page}`).pipe(res=> res);
  }
}
