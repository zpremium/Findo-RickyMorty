import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  episodes: any=[]; //resultado de la api

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  goDetail() {
    this.router.navigateByUrl('/detalle');
  }

  getData() {
    this.apiService.getEpisodes().subscribe(
      (response) => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.episodes = [...this.episodes,...res.results]; //Accede al array 'results' que esta dentro de 'res' y lo guarda en episodes (MERGEAR)
        this.apiService.episodes = this.episodes; //estoy guardando el array del servicio episodes  , lo guardo del resultado del api

      },
      (error) => {
        console.log(error);
      }
    );

  }





}
