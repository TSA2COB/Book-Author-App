import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: string;
  book: Book = new Book();

  constructor(private bookService: BookService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },
    error => console.log(error));
  }

  private editBook() {
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }

  private goToBookList() {
    this.router.navigate(['books']);
  }

  onSubmit() {
    console.log(this.book);
    this.editBook();
  }

  cancelUpdateBook() {
    console.log("cancelled editing book with id: " + this.id);
    this.goToBookList();
  }

}
