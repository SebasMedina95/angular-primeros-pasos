import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    /** Los componentes */
    declarations: [
        ContadorComponent
    ],
    /** Que quiero que sea visible fuera de este módulo */
    exports: [
        ContadorComponent
    ],
    /** Van módulos, objetos */
    imports: [
        CommonModule
    ]

})

export class ContadorModule {

}