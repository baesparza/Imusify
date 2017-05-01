import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../others/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any;
  songs: any[] = [];

  constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {

    this._activatedRoute.params.map( 
      param => param['id'])
      .subscribe(id => {
      this._spotifyService.getArtista( id )
            .subscribe(data => this.artista = data);

      this._spotifyService.getTopArtista( id )
            .subscribe(data => this.songs = data);
      
  });
  

  }


}
