import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {
        path: 'produits',
        loadChildren: ()=>import("./gestion-produit/gestion-produit.module").then((m)=>m.GestionProduitModule)
      },
      {
        path: 'categories',
        loadChildren: ()=>import("./gestion-categorie/gestion-categorie.module").then((m)=>m.GestionCategorieModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
