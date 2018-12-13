import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authors';
  constructor(private _authorService: AuthorService){

  }
  ngOnInit(){
    console.log("Welcome Back")
  }
}
