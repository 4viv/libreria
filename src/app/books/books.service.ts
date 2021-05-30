import { Books } from './books';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private booksLista: Books[] = [
    { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro dificil', autor: 'Juanito Vanana', precio: 200, },
    { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro dificil', autor: 'Juanito Vanana', precio: 200, },
    { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro dificil', autor: 'Juanito Vanana', precio: 200, },
    { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro dificil', autor: 'Juanito Vanana', precio: 200, }
  ];

  constructor() { }

  getBooks() {
    return this.booksLista.slice(); // slice envia una copia
  }
}
