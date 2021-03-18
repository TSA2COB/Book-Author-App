import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  id: string;
  author: Author;

  constructor(private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authorService.getAuthorById(this.id).subscribe(data => {
      this.author = data;
    },
    error => console.log(error));
  }

  cancelViewAuthor() {
    this.router.navigate(['authors']);
  }

  editAuthor(id: string) {
    this.router.navigate(['authors', id, 'edit']);
  }

  deleteAuthor(id: string) {
    console.log("delete: " + id);
    this.authorService.deleteAuthor(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['authors']);
    });
  }

}
