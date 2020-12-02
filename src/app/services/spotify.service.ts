import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

// https://developer.spotify.com/console/search/

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('servicio listo para ser usado');
  }

  getToken() {
    return 'BQAXYa1pBtfRfACtdnnPVJsA6-qAyTzNsVDXIF-7Xldsju4Jj4Q3Ra9G9GJ-lEid2VWuKVC0Wq3oAfAAHMU';
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.getToken()
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items ));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( data => data['tracks'] ));
  }

}
