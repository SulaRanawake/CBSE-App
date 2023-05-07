import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Output() bookSelected = new EventEmitter<Book>();

  books: Book[] = [
    { title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling' , image: 'assets/images/1-philosophers-Stone.jpeg', price: 2500 , description: "Eleven-year-old Harry Potter learns that he is a wizard and begins attending Hogwarts School of Witchcraft and Wizardry, where he makes friends, learns magic, and uncovers the truth about his family and the evil wizard, Lord Voldemort."},
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' , image: 'assets/images/2-chamber-of-secrets.jpeg', price: 3490 , description: "In Harry's second year at Hogwarts, he uncovers a mysterious diary that belonged to a former student named Tom Riddle, who has ties to Voldemort. Harry and his friends work to uncover the truth about the Chamber of Secrets and prevent the release of a deadly creature."},
    { title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling' , image: 'assets/images/3-Prisoner-of-Azkaban.jpeg', price: 3490 , description: "In his third year, Harry learns about Sirius Black, a dangerous escaped prisoner and convicted murderer who is believed to be after him. With the help of new friends, Harry uncovers the truth about his parents' deaths and saves a wrongly-accused man."},
    { title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling' , image: 'assets/images/4-goblet-of-fire.jpeg', price: 3490 , description: "Harry is unexpectedly chosen to compete in the Triwizard Tournament, a dangerous contest between Hogwarts and two other wizarding schools. As the tasks become increasingly difficult and dangerous, Harry must also face a rising threat from Voldemort."},
    { title: 'Harry Potter and the Order of Phoenix', author: 'J.K. Rowling' , image: 'assets/images/5-order-of-the-phoenix.jpeg', price: 3490 , description: "Harry and his friends form a secret organization to resist Voldemort and his followers, who are gaining power in the wizarding world. Meanwhile, Hogwarts is under scrutiny from the Ministry of Magic and Harry is plagued by visions of Voldemort."},
    { title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling' , image: 'assets/images/6-half-blood-prince.jpeg', price: 3490 , description: "Voldemort is growing stronger and Hogwarts is no longer safe. Dumbledore takes Harry under his wing to help him prepare for the final battle, while Harry discovers a mysterious book that leads him on a dangerous quest for information."},
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' , image: 'assets/images/7-deathly-hallows.jpeg', price: 3490 , description: "Harry, Ron, and Hermione embark on a dangerous mission to find and destroy the remaining Horcruxes, objects that contain fragments of Voldemort's soul. Meanwhile, Voldemort and his Death Eaters have taken control of the Ministry and Hogwarts, leading to a final, epic battle between good and evil."},
  ];

  selectBook(book: Book) {
    this.bookSelected.emit(book);
  }
}
