import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAuthorsComponent } from './add-authors/add-authors.component'
import { EditAuthorComponent } from './edit-author/edit-author.component'
import { ShowAuthorsComponent } from './show-authors/show-authors.component' 
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: 'show', component: ShowAuthorsComponent },
  { path: 'add', component: AddAuthorsComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  
  { path: '', pathMatch: 'full', redirectTo: 'show' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
