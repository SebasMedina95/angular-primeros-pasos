import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeEliminado       : string = '';
  mostrarMsjEliminado  : boolean = false;

  constructor() { 
    console.log('Saludos, desde el Constructor ...');
  }

  heroesArray : string[] = ['IronMan', 'SpiderMan', 'Thor', 'Hulk', 'Dr. Strange', 'Capitan America', 'AntMan'];

  borrar(){
    console.log('***** Borrando ... *****');
    let eliminado : string = this.heroesArray.pop() || '';
    console.log(eliminado);
    this.heroeEliminado = eliminado || '';

    if(eliminado?.length > 0){
      this.mostrarMsjEliminado = true;
    }else{
      this.mostrarMsjEliminado = false;
    }

    setTimeout(() => {
      this.mostrarMsjEliminado = false;
    }, 2000);

  }


}
