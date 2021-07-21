import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  episodes: any;
  pages: number = 0;

  constructor(private http: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/episode';
  }

  getEpisodes() {
    this.pages = this.pages + 1;

    return this.http.get(this.url + '?page=' + this.pages);
  }

  getEpisodeByNumber(name: string) {
    return this.episodes.find((element: any) => element.name === name);
  }
}

