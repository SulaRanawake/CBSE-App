import { Component } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cbse-app';
  selectedBook: Book | null = null;
  bookFlag: boolean = false;

  onButtonClick() {
    if (!this.bookFlag)
    this.bookFlag = true;
    else this.bookFlag = false;
  }
}
