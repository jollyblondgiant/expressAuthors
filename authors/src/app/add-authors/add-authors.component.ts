import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
  errors: string[]
  seeErrors: boolean
  newAuthor : any
  successmessage : boolean
  constructor(private _authorService: AuthorService) {
    
  }
  ngOnInit() {
    this.errors =[]
    this.seeErrors = false
    this.successmessage = false
    this.newAuthor = {
      name: "",
      quote: ""
    }
  }
  addAuthor(){
    if(this.newAuthor.name.length > 3){
    console.log(this.newAuthor)
    let obv = this._authorService.addAuthor(this.newAuthor)
    obv.subscribe(data=>console.log("ADDED", data))
    this.successmessage = true
    this.newAuthor = {
      name: "",
      quote: ""
    } 
  }else{
    this.seeErrors = true
    this.errors.push["Author Name must be at least 3 characters"]
  }
  }
  
}
