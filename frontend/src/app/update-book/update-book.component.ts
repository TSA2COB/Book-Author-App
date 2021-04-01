import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';
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
  author_list: Author[];
  keyword = 'name';
  searchKeyword = "";

  constructor(private bookService: BookService,
    private authorService: AuthorService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },
    error => console.log(error));
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
