import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/naruto.interface';

import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { 
    //this.personajesArray = this.narutoService.personajesArray;
  }

  ngOnInit(): void {
  }

  /**Valor por defecto a establecer ... */
  nuevo : Personaje = {
    nombre : '',
    poder  : 0
  }

  // get personajesArray() : Personaje[] {
  //   return this.narutoService.personajesArray;
  // }

  /*
  agregarNuevoPersonaje( argumento : Personaje ){
    console.log('Agregando en el Main Page Component');
    console.warn(argumento);
    this.personajesArray.push(argumento);
  }
  */

}
