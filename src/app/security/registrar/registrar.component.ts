import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private _seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  agregarUsuario(form: NgForm){
    this._seguridadService.registrarUsuario({
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      email: form.value.email,
      password: form.value.password,
      userName: form.value.userName,
      usuarioId: ''
    })
  }

}
