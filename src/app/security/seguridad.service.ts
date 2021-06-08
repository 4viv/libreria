import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { LoginData } from './login-data';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  usuario: Usuario | null;
  seguridadCambio = new Subject<boolean>();

  constructor(private router: Router) {
    this.usuario = null
  }

  registrarUsuario(usr: Usuario){
    this.usuario = {
      nombre: usr.nombre,
      apellido: usr.apellido,
      email: usr.email,
      userName: usr.userName,
      usuarioId: Math.round(Math.random() * 10000).toString(),
      password: ''
    }
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  login(loginData: LoginData) {
    this.usuario = {
      nombre: '',
      apellido: '',
      email: loginData.email,
      userName: '',
      usuarioId: Math.round(Math.random() * 10000).toString(),
      password: ''
    }
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  serrarsesion() {
    this.usuario = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['login']);
  }

  obtenerUsuario() {
    return {...this.usuario};
  }

  onSesion() {
    return this.usuario != null;
  }
}
