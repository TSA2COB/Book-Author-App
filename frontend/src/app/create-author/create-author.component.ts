import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  author: Author = new Author();

  constructor(private authorService: AuthorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  private saveAuthor() {
    this.authorService.createAuthor(this.author).subscribe(data => {
      console.log(data);
      this.goToAuthorList();
    },
    error => console.log(error));
  }

  private goToAuthorList() {
    this.router.navigate(['authors']);
  }

  onSubmit() {
    console.log(this.author);
    this.saveAuthor();
  }

  cancelCreateAuthor() {
    console.log("cancelled creation of new author");
    this.goToAuthorList();
  }

}
