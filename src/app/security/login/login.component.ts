import { SeguridadService } from './../seguridad.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  loginUsuario(form: NgForm) {
    this._seguridadService.login({
      email: form.value.email,
      password: form.value.password
    })
  }

}
