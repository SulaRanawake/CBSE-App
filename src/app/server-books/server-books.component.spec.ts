import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerBooksComponent } from './server-books.component';

describe('ServerBooksComponent', () => {
  let component: ServerBooksComponent;
  let fixture: ComponentFixture<ServerBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
