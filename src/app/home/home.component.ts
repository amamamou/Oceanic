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
    12: '../../assets/images/56.jpg',
    13: '../../assets/images/45.jpg',
    14: '../../assets/images/46.jpg',
    15: '../../assets/images/56.jpg',
    16: '../../assets/images/39.jpg',
    17: '../../assets/images/36.jpg',
    18: '../../assets/images/40.jpg',
    19: '../../assets/images/37.jpg',
    20: '../../assets/images/10.jpg',
    21: '../../assets/images/35.jpg',
    22: '../../assets/images/38.jpg',
    23: '../../assets/images/44.jpg',
    24: '../../assets/images/36.jpg',
    25: '../../assets/images/40.jpg',
    26: '../../assets/images/43.jpg',
    27: '../../assets/images/39.jpg',
    28: '../../assets/images/21.jpg',
    29: '../../assets/images/46.jpg',
    30: '../../assets/images/56.jpg',
    31: '../../assets/images/36.jpg',
    32: '../../assets/images/55.jpg',
    33: '../../assets/images/40.jpg',
    34: '../../assets/images/45.jpg',
    35: '../../assets/images/36.jpg',
    36: '../../assets/images/40.jpg'
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
