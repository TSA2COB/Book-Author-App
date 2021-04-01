import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  author_list: Author[];
  keyword = 'name';
  searchKeyword = "";

  constructor(private bookService: BookService,
    private authorService: AuthorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  selectEvent(item) {
    // do something with selected item
    console.log(item);

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.searchKeyword = val;
    
  }
  
  onFocused(e){
    // do something when input is focused
    
  }

  private getAuthors() {
    this.authorService.getAuthorList().subscribe(data => {
      this.author_list = data;
      console.log(this.author_list);
    });
  }

  private saveBook() {
    this.bookService.createBook(this.book).subscribe(data => {
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
    this.saveBook();
  }

  cancelCreateBook() {
    console.log("cancelled creation of new book");
    this.goToBookList();
  }

}
