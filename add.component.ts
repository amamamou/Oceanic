import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formProduit!: FormGroup;

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.formProduit = this.formBuilder.group({
      nomProduit: ['', Validators.required],
      prixProduit: ['', [Validators.required, Validators.min(0)]],
      dateCreation: ['', Validators.required],
      categorieIdCat: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.formProduit.valid) {
      this.produitService.addProduct(this.formProduit.value).subscribe(
        (response) => {
          console.log('Product added successfully', response);
          window.location.reload(); // Refresh the page

        },
        (error) => {
          console.error('Error adding product:', error);
          // Handle errors here (e.g., show an error message)
        }
      );
    } else {
      console.error('Form is not valid');
      // Handle invalid form here (e.g., show validation errors)
    }
  }

}
