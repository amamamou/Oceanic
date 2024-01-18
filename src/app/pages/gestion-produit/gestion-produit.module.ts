import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProduitRoutingModule } from './gestion-produit-routing.module';
import { GestionProduitComponent } from './gestion-produit.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ProduitService } from 'src/app/services/produit.service';
import { CategorieService } from 'src/app/services/categorie.service';


@NgModule({
  declarations: [
    GestionProduitComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionProduitRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ProduitService, CategorieService
  ]

})
export class GestionProduitModule { }
