import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { BuscarComponent } from '../components/buscar/buscar.component';
import { ArtistaComponent } from "../components/artista/artista.component";

const ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'music', component: BuscarComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '**', redirectTo:'home' }
];

export const ROUTER = RouterModule.forRoot(ROUTERS, {useHash: true});