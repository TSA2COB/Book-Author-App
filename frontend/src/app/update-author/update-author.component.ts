import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  id: string;
  author: Author = new Author();

  constructor(private authorService: AuthorService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authorService.getAuthorById(this.id).subscribe(data => {
      this.author = data;
    },
    error => console.log(error));
  }

  private editAuthor() {
    this.authorService.updateAuthor(this.id, this.author).subscribe(data => {
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
    this.editAuthor();
  }

  cancelUpdateAuthor() {
    console.log("cancelled editing author with id: " + this.id);
    this.goToAuthorList();
  }

}
