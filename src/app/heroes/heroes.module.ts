import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /** Los componentes */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /** Que quiero que sea visible fuera de este módulo */
    exports: [
        ListadoComponent
    ],
    /** Van módulos, objetos */
    imports: [
        CommonModule
    ]

})

export class HeroesModule {

}