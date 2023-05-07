import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-server-books',
  templateUrl: './server-books.component.html',
  styleUrls: ['./server-books.component.css']
})
export class ServerBooksComponent {
  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://localhost:3000/getBookDetails')
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError('Something went wrong');
        })
      ).subscribe((data: any) => {
        this.books = data;
      });
  }
}
