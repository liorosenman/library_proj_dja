import { Token } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { BooksComponent } from './components/books/books.component';
import { LoansComponent } from './components/loans/loans.component';

const token = localStorage.getItem('authToken');


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'books', component: BooksComponent },
  { path: 'loans', component: LoansComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
