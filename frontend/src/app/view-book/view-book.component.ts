import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  id: string;
  book: Book;

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },
    error => console.log(error));
  }

  cancelViewBook() {
    this.router.navigate(['books']);
  }

  editBook(id: string) {
    this.router.navigate(['books', id, 'edit']);
  }

  deleteBook(id: string) {
    console.log("delete: " + id);
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['books']);
    });
  }

}
