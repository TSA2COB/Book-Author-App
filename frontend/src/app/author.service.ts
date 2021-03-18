import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseURL = "http://localhost:8090/authors";

  constructor(private httpClient: HttpClient) {

  }

  getAuthorList(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${this.baseURL}`);
  }

  getAuthorById(id: string): Observable<Author> {
    return this.httpClient.get<Author>(`${this.baseURL}/${id}`);
  }

  createAuthor(author: Author): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, author);
  }

  updateAuthor(id: string, author: Author): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, author);
  }

  deleteAuthor(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
