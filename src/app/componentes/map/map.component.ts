import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { DashboardService } from '../../servicios/dashboard.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DashboardService]
})
export class MapComponent implements OnInit {

  mapa: Mapboxgl.Map;
  public listCommerces;

  constructor(
    private _servicioDashboard: DashboardService
  ) {
    this.getCommercesLayer();
  }
  /**
    * @param {String} metodo ngOnInit
    * @param {String} mensaje toma el mapboxkey almacenado en los environments y las coordenadas de la ciudad de bogota
    * @returns {Array} Crea el mapa con mapbox de la ciudad de bogota
    */
  ngOnInit() {
    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.0817500, 4.6097100],
      zoom: 10
    });
    this.mapa.addControl(new Mapboxgl.NavigationControl());
  }

  /**
  * @param {String} metodo markers
  * @param {String} mensaje toma la lista de coordenadas y crea un marcador por cada coordenada de la lista 
  */
  markers() {
    for (let commerce of this.listCommerces) {
      let coordenates = commerce.geometry.coordinates;
      const marker = new Mapboxgl.Marker({
        draggable: true
      }).setLngLat([coordenates[0], coordenates[1]])
        .addTo(this.mapa);
    }
  }
  /**
    * @param {String} metodo getCommercesLayer
    * @param {String} mensaje hacer uso del servicio que carga el insumo, lista de coordenadas
    * @returns {Array} Carga variable donde se almacena la respuesta del servicio
    */
  getCommercesLayer() {
    this._servicioDashboard.commercesLayer().subscribe(
      response => {
        this.listCommerces = response.features;
        this.markers();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
