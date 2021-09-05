import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() nuevoPersonaje : Personaje = {
    nombre : '',
    poder  : 0
  }

  constructor(private narutoService : NarutoService) { 

  }

  /**Para emitir un valor al padre, emitir EVENTOS ... */
  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length == 0 || this.nuevoPersonaje.poder == null){
      alert('Los Campos son Obligatorios ...');
      return;
    }

    console.log(this.nuevoPersonaje);
    console.log(this.nuevoPersonaje.nombre);
    console.log(this.nuevoPersonaje.poder);

    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.narutoService.agregarPersonaje(this.nuevoPersonaje);

    /**Reseteo el objeto */
    this.nuevoPersonaje = {
      nombre : '',
      poder  : 0
    }

  }

}
