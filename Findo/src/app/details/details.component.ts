import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  episode:any;
  character:any;

  constructor(
    private _location: Location,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEpisodeDetail();
    // this.characters = this.apiService.getCharacterData();
  }

  getEpisodeDetail() {
    const name = String(this.route.snapshot.paramMap.get('id'));

    this.episode = this.apiService.getEpisodeByNumber(name);
    console.log(this.episode);
  }

  goBack() {
    this._location.back();
    this.apiService.pages = 0;
  }
}

