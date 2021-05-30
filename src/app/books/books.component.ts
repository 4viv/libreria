import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from './books';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'descripcion', 'autor', 'precio'];
  dataSource = new MatTableDataSource<Books>()

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.dataSource.data = this.bookService.getBooks();
  }

}
