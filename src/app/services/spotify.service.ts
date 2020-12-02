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
    return 'BQCzw8cD1wt3XEanUD657lCaMJZ0WArEdqiEEVUH2RFfdImSb1aIlm4jpYK8xaCBAy-XWcGxiWjzOHJw1bU';
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
