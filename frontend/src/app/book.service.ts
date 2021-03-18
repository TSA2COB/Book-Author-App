import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8090/books";

  constructor(private httpClient: HttpClient) {

  }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  getBookById(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  createBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  updateBook(id: string, book: Book): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
