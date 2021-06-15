import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosComponent } from './libros/libros.component';
import { RegistrarComponent } from './security/registrar/registrar.component';
import { LoginComponent } from './security/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListComponent } from './navegacion/menu-list/menu-list.component';
import { BooksComponent } from './books/books.component';
import { BookNuevoComponent } from './books/book-nuevo.component';



@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibrosComponent,
    RegistrarComponent,
    LoginComponent,
    InicioComponent,
    SidenavComponent,
    BarraComponent,
    MenuListComponent,
    BooksComponent,
    BookNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
