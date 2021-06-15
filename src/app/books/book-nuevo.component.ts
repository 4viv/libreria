import { Component } from "@angular/core";


@Component({
  selector: 'app-book-nuevo',
  template: `<h1 mat-title>Dialogo para agregar libros</h1>
              <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Cerrar</button>
              </mat-dialog-actions>
             `
})

export class BookNuevoComponent {

}
