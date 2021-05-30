import { SeguridadService } from './../../security/seguridad.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean = false;
  usuarioSubscription: Subscription;

  constructor(private _seguridadServicio: SeguridadService) {
    this.usuarioSubscription = this._seguridadServicio.seguridadCambio.subscribe(estado => {
      this.estadoUsuario = estado;
    })
   }

  ngOnInit(): void {
  }

  onCerrarMenu(){
    this.menuToggle.emit();
  }

  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
  }

}
