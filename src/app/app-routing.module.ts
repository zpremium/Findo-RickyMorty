import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path:'',
    component:ListadoComponent
  },
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'detalle/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
