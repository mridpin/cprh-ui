import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { Album, AlbumAdapter } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private albumAdapter: AlbumAdapter
  ) { }

  /**
   * Returns if:
   * 200 -> Search results from the params from the server, mapped to a list of Album (can be empty)
   * other code -> Error code and message
   * @param searchParams 
   */
  search(searchParams: string): Observable<Album[]> {
    return this.http.get<Album[]>(environment.url + '/search', {
      params: {
        search: searchParams
      }
    }).pipe(
      map((res: any) => res.albums.items.map((item: any) => this.albumAdapter.adapt(item)))
    );
  }

  /**
   * Returns if:
   * 200 -> Album data mapped to Album interface
   * other code -> Error code and message
   * @param searchParams 
   */
  album(album: Album): Observable<Album> {
    return this.http.get<Album>(environment.url + '/albums', {
      params: {
        albumId: album.id
      }
    }).pipe(
      map((res: any) => this.albumAdapter.adapt(res))
    );
  }
}
