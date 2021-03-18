import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService,
    private router: Router) {

    }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
    });
  }

  createBook() {
    this.router.navigate(['books/new']);
  }

  viewBook(id: string) {
    console.log("view: " + id);
    this.router.navigate(['books', id, 'view']);
  }

  updateBook(id: string) {
    console.log("update: " + id);
    this.router.navigate(['books', id, 'edit']);
    
  }

  deleteBook(id: string) {
    console.log("delete: " + id);
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.getBooks();
    });

  }

}
