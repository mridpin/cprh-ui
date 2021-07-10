import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export interface Album {
  id: string;
  name: string;
  artist: string;
  year: number;
  copyright?: string;
  image?: string;
  label?: string;
}

// Injectable DTO object
@Injectable({
  providedIn: 'root',
})
export class AlbumAdapter implements Adapter<Album> {
  adapt(item: any): Album {
    const album: Album = {
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      year: new Date(item.release_date).getFullYear(),
      copyright: item.copyrights?.[0].text,
      image: item.images?.url,
      label: item.label,
    };
    return album;
  }
}
