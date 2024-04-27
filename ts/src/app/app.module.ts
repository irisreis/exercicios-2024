import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LateralComponent } from './components/lateral/lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ConteudoComponent,
    RodapeComponent,
    LateralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
