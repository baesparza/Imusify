import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../others/spotify.service";


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  constructor(private _spotifyService:SpotifyService) { }

  termino :string;

  ngOnInit() {  }

  buscarArtista(){
    this._spotifyService.getArtistas( this.termino )
          .subscribe();
  }
}