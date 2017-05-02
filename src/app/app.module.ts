import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Router
import { ROUTER } from "./others/app.routes";

//Servicios
import { SpotifyService } from "./others/spotify.service"

//Pipes
import { SinfotoPipe } from './others/sinfoto.pipe';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { NavFooterComponent } from './components/general/nav-footer/nav-footer.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ResultsComponent } from './components/buscar/results/results.component';
import { HomeComponent } from './components/home/home.component';
import { DomseguroPipe } from './others/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    NavbarComponent,
    NavFooterComponent,
    FooterComponent,
    BuscarComponent,
    ResultsComponent,
    HomeComponent,
    SinfotoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTER
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
