import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {
  authors: any
  seeActions : boolean
  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this.seeActions = false
    this.showAuthors()
  }
  showAuthors(){
    this.getAuthors()
  }
  getAuthors(){
    let obv = this._authorService.getAuthors()
    obv.subscribe(data=>this.authors = data)
  }
  deleteAuthor(id){
    let obv = this._authorService.destroyAuthor(id)
    obv.subscribe(data=>this.authors = data)
    this.showAuthors()
  }
 
}
