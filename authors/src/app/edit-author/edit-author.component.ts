import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  errors: string[]
  seeErrors: boolean
  editAuthor: any
  authorID: string
  thisAuthor: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authorService: AuthorService
  ) {}
  ngOnInit() {
    this.errors =[]
    this.seeErrors = false
    this._route.params.subscribe((params: Params)=>{
  
      this.authorID = params['id']
      
    })
    this.editAuthor = {
      name: "",
      quote: ""
    }
    this.getAuthorByID(this.authorID)
    
    
   

  }
  getAuthorByID(id){
  this._authorService.getAuthorByID(id).subscribe(data=>{
    this.thisAuthor = data
    console.log(this.thisAuthor.name, "IS HERE")
 
  
  
  })
  
  }
  updateAuthor(){
    
    
    if(this.editAuthor.name.length > 3){
    this.editAuthor = {
      name: this.editAuthor.name
    }
    console.log(this.editAuthor)
    let obv = this._authorService.editAuthor(this.authorID, this.editAuthor)
    obv.subscribe(data=>console.log(data))
  }
   else{
    console.log(this.editAuthor.name.length)
     this.seeErrors = true
    this.errors.push["Author Name must be at least 3 characters"]
   } 
  }
}
