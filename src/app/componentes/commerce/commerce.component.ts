import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../servicios/dashboard.service';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css'],
  providers: [DashboardService]
})
export class CommerceComponent implements OnInit {
  //variable para almacenar lista de comerciantes
  public commercesList:[];

  constructor(
    private _servicioDashboard: DashboardService
  ) { 
    this.getCommerces();
  }

  ngOnInit(): void {
  }

  /**
  * @param {String} metodo getCommerces
  * @param {String} mensaje hacer uso del servicio que carga el insumo, lista de comerciantes
  * @returns {Array} Carga variable donde se almacena la respuesta del servicio
  */
  getCommerces(){
    this._servicioDashboard.commerces().subscribe(
      response=>{
        this.commercesList=response;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
