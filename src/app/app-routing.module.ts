import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import {MapComponent} from './componentes/map/map.component';
import { CommerceComponent } from './componentes/commerce/commerce.component';

/**
 * declarar rutas para la navegacion entre componentes
 */
const routes: Routes=[
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent},
  {path: 'commerce', component: CommerceComponent},
  {path: '**', component: DashboardComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
