import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCategorieRoutingModule } from './gestion-categorie-routing.module';
import { GestionCategorieComponent } from './gestion-categorie.component';
import { ListComponent } from './list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategorieService } from 'src/app/services/categorie.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionCategorieComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GestionCategorieRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CategorieService
  ]
})
export class GestionCategorieModule { }
