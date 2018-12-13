import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorID : string
  constructor(private _http: HttpClient) { 

  }
  getAuthors(){
    return this._http.get('/authors')
    
  }
  getAuthorByID(authorID:string){
    return this._http.get(`/authors/${authorID}`)
  }
  addAuthor(newAuthor){
    return this._http.post('/authors', newAuthor)
  }
  destroyAuthor(authorID){
    return this._http.delete(`/authors/${authorID}`)
  }
  editAuthor(authorID, updateAuthor){
    console.log(authorID, updateAuthor, "AUTHOR.SERVICE.TS")
    return this._http.put(`/authors/${authorID}`, updateAuthor)
  }
  

}
