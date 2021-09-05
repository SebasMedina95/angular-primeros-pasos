import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/naruto.interface";

@Injectable()
export class NarutoService {
    
    private _personajesArray : Personaje[] = [
        {
          nombre : 'Hashirama Senju',
          poder  : 50000
        },
        {
          nombre : 'Tobirama Senju',
          poder  : 35000
        },
        {
          nombre : 'Itachi Uchiha',
          poder  : 48000
        },
        {
          nombre : 'Minato Namizake',
          poder  : 45000
        },
        {
          nombre : 'Naruto Uzumaki',
          poder  : 40000
        },
        {
          nombre : 'Kakashi Hatake',
          poder  : 46000
        }
    ];

    get personajesRetorno() : Personaje[] {
        /**Rompo la relación de JS de mandar por referencia, uso el Spreed Operator
         * para separar independiente cada elemento del arreglo y crea uno nuevo.
         * Esto es una buena práctica.
         */
        return [...this._personajesArray];
    }

    constructor(){
        console.log('SERVICIO INICIALIZADO ...');
    }

    agregarPersonaje(personaje : Personaje){
        console.log(personaje);
        this._personajesArray.push(personaje);
    }


}