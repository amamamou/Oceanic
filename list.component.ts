import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
selector: 'app-list',
templateUrl: './list.component.html',
styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any[] = [];
  selectedProduit: any = null;
  displayStyle = "none";

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
    13: '../../assets/images/36.jpg',
    14: '../../assets/images/55.jpg',
    15: '../../assets/images/40.jpg',
    16: '../../assets/images/4.jpg',
    17: '../../assets/images/36.jpg',
    18: '../../assets/images/40.jpg'
    // ... other mappings
  };

  constructor(private productService: ProduitService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Fetched products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  deleteProduct(id: number): void {
    if(confirm("Are you sure to delete this product?")) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          console.log('Product deleted successfully');
          this.fetchProducts(); // Refresh the product list
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
  fetchProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
        console.log('Fetched products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  openEditForm(product: any): void {
    this.selectedProduit= product;
    this.displayStyle = "block";
    }
    closeEditForm(): void {
    this.selectedProduit = null;
    this.displayStyle = "none";
    }
    submitEditForm(): void {
      if (this.selectedProduit) {
        this.productService.updateProduit(this.selectedProduit.idProduit, this.selectedProduit)
          .subscribe(
            (data) => {
              this.closeEditForm();
              this.fetchProducts(); // Fetch updated list
            },
            (err) => console.log(err)
          );
      } else {
        console.error('Error: selectedProduit is undefined');
      }
    }

    }




