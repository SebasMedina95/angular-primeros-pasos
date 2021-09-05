import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  constructor(private narutoService : NarutoService) { 

  }

  ngOnInit(): void {
  }

  /**Decorador para importar lo que tiene la MainPage 
   * En el main-page-component, donde defimos el <app-personajes></app-personajes>
   * defino el input como propiedad, es decir [personajesArray]="personajesArray" y así
   * tomo lo que viene desde el componente padre que es el main-page.
  */
  // @Input('datosRecopilados') personajesArray : Personaje[] = [];

  get personajesArray() {
    return this.narutoService.personajesRetorno;
  }

}
