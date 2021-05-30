import { BooksComponent } from './books/books.component';
import { RouterGuard } from './security/router.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './security/login/login.component';
import { RegistrarComponent } from './security/registrar/registrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [RouterGuard] },
  { path: 'books', component: BooksComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterGuard]
})
export class AppRoutingModule { }
