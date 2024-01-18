import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public categories: any [] = [];
  form: any;
  submitted: boolean=false;

  constructor(private fb: FormBuilder, private catService: CategorieService) { }

  ngOnInit(): void {
    this.loadListCategories();
    this.form = this.fb.group({
      nom_cat: ['', Validators.required]
      });
  }
    loadListCategories(): void {

      this.catService.getListCategories().subscribe(data=>{this.categories.push(...data);},err=>console.log(err));

    }
    onSubmit(): void {
      const nom_cat = this.form.value.nom_cat;
      this.catService.postCategories({ nom_cat })
      .subscribe((newCategorie) => {
      this.catService.getListCategories().subscribe((data) => {
      this.categories= data; });
      }, (error) => {
      });
      }
  }


