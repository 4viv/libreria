import { Books } from './books';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private booksLista: Books[] = [
    { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro dificil', autor: 'Juanito Vanana', precio: 200, },
    { libroId: 2, titulo: 'Inferno', descripcion: 'Ciencia Ficcion', autor: 'Pablo Cuello', precio: 550, },
    { libroId: 3, titulo: 'La Tumba', descripcion: 'Un libro de Misterio', autor: 'Jose Agustin', precio: 250, },
    { libroId: 4, titulo: 'Los Borgia', descripcion: 'Accion Mediebal', autor: 'Mario Puzo', precio: 600, }
  ];

  constructor() { }

  getBooks() {
    return this.booksLista.slice(); // slice envia una copia
  }
}
