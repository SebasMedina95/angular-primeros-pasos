import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent {
    nombre : string = 'IronMan';
    real   : string = 'Tony Star';
    edad   : number = 45;
    colega : string = 'Capitan America';

    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    obtenerColega() : string {
        return `Aunque discrepan, el ${this.colega} es amigo de ${this.nombre}`;
    }

    cambiarNombre() : void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad() : void {
        this.edad = 31;
    }
}