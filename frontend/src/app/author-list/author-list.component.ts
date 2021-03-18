import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(
    private authorService: AuthorService,
    private router: Router) {

    }

  ngOnInit(): void {
    this.getAuthors();
  }

  private getAuthors() {
    this.authorService.getAuthorList().subscribe(data => {
      this.authors = data;
    });
  }

  createAuthor() {
    this.router.navigate(['authors/new']);
  }

  viewAuthor(id: string) {
    console.log("view: " + id);
    this.router.navigate(['authors', id, 'view']);
  }

  updateAuthor(id: string) {
    console.log("update: " + id);
    this.router.navigate(['authors', id, 'edit']);
    
  }

  deleteAuthor(id: string) {
    console.log("delete: " + id);
    this.authorService.deleteAuthor(id).subscribe(data => {
      console.log(data);
      this.getAuthors();
    });

  }

}
