import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastSixProducts: any[] = [];


  products: any[] = [];
  imageMapping: { [key: number]: string } = {
    1: '../../assets/images/37.jpg',
    2: '../../assets/images/10.jpg',
    3: '../../assets/images/35.jpg',
    4: '../../assets/images/38.jpg',
    5: '../../assets/images/44.jpg',
    6: '../../assets/images/36.jpg',
    7: '../../assets/images/40.jpg',
    8: '../../assets/images/43.jpg',
    9: '../../assets/images/39.jpg',
    10: '../../assets/images/45.jpg',
    11: '../../assets/images/46.jpg',
    12: '../../assets/images/43.jpg',
    13: '../../assets/images/36.jpg',
    14: '../../assets/images/40.jpg'
    // ... other mappings
  };

  constructor(private productService: ProduitService) {}

  ngOnInit() {
    this.productService.getLastSixProducts().subscribe(
      products => {
        this.lastSixProducts = products;
      },
      error => {
        console.error('Error fetching last six products', error);
      }
    );
}}
