import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  /**
  * @param {String} metodo commercesLayer
  * @param {String} mensaje hacer uso del insumo, capas de comerciantes
  * @returns {Array} retorna respuesta del servicio rest
  */
  commercesLayer(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'commerces/layer', { headers: headers });
  }
  
  /**
  * @param {String} metodo commercesGraph
  * @param {String} mensaje hacer uso del insumo, graficas de comerciantes
  * @returns {Array} retorna respuesta del servicio rest
  */
  commercesGraph(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'commerces/graph', { headers: headers });
  }

  /**
  * @param {String} metodo commerces
  * @param {String} mensaje hacer uso del insumo, lista de comerciantes
  * @returns {Array} retorna respuesta del servicio rest
  */
  commerces(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'commerces', { headers: headers });
  }
}
