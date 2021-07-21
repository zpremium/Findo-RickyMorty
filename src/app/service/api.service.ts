import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  episodes: any;
  pages: number = 0;
  character: any;
  characters: any = [];

  constructor(private http: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/episode';
    this.characters='https://rickandmortyapi.com/api/character/'
  }

  getEpisodes() {
    this.pages = this.pages + 1;

    return this.http.get(this.url + '?page=' + this.pages);
  }

  getEpisodeByNumber(name: string) {
    return this.episodes.find((element: any) => element.name === name);
  }

  //  getCharacterData() {
  //   this.getEpisodes().subscribe((item) => {
  //      item.characters.forEach((i:any) =>
  //        this.http.get(i).subscribe((pers) => {
  //        this.character = pers;
  //          const per = this.character.name;
  //          this.character.push(per);
  //      })
  //      );
  //    });
  //   return this.characters;
  //  }

}

