import { BooksService } from './books.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Books } from './books';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNuevoComponent } from './book-nuevo.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
// AfterViewInit Se inicia despues de cargar el componente
export class BooksComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titulo', 'descripcion', 'autor', 'precio'];
  dataSource = new MatTableDataSource<Books>()

  @ViewChild(MatSort) ordenamiento = new MatSort;
  //@ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BooksService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataSource.data = this.bookService.getBooks();
  }

  // este componente se inicia despues de Oninit
  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento
    this.dataSource.paginator = this.paginator;
  }

  // Filtrando
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirDialogo() {
    this.dialog.open(BookNuevoComponent);
  }

}
