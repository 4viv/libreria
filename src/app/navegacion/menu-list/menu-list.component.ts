import { SeguridadService } from './../../security/seguridad.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean = false;
  usuarioSubscription: Subscription;

  constructor(private _seguridadServices: SeguridadService) {
    this.usuarioSubscription = this._seguridadServices.seguridadCambio.subscribe(est => {
      this.estadoUsuario = est;
    });
   }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

  cerrarSesion() {
    this._seguridadServices.serrarsesion();
this.onMenuToggleDispatch();
  }

  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
  }

}
