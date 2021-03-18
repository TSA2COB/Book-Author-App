import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'authors', pathMatch: 'full'},
  {path: 'authors', component: AuthorListComponent},
  {path: 'authors/new', component: CreateAuthorComponent},
  {path: 'authors/:id/edit', component: UpdateAuthorComponent},
  {path: 'authors/:id/view', component: ViewAuthorComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/new', component: CreateBookComponent},
  {path: 'books/:id/edit', component: UpdateBookComponent},
  {path: 'books/:id/view', component: ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
