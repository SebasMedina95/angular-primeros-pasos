import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contadores/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contadores/contadores.module';

/*
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
*/



@NgModule({
  //Usualmente aquí vamos colocar los componentes!.
  declarations: [
    AppComponent,
    //ContadorComponent, //Nuevo Componente Creado, .ts - Ahora llamamos en el html.
    //HeroeComponent, ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
