import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProduitComponent } from './gestion-produit.component';

const routes: Routes = [
  {
    path: '',
    component: GestionProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProduitRoutingModule { }
