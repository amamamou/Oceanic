import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiUrl='http://localhost:8080/produits/api';

    constructor(private httpClient: HttpClient) { }
    // Function to fetch all products
  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  // Function to get the last six products based on IDs
  getLastSixProducts(): Observable<any[]> {
    return this.getAllProducts().pipe(
      map(products => products
        .sort((a, b) => b.idProduit - a.idProduit) // Sort by idProduit in descending order
        .slice(0, 6) // Take the first six products
      )
    );
  }


    getProducts(): Observable<any[]> {
      return this.httpClient.get<any[]>('http://localhost:8080/produits/api');
    }
    // Inside your ProduitService
deleteProduct(id: number): Observable<any> {
  return this.httpClient.delete(`http://localhost:8080/produits/api/${id}`);
}


addProduct(productData: any): Observable<any> {
  return this.httpClient.post(`${this.apiUrl}`, productData);
}
getProductsByCategory(category: string): Observable<any[]> {
  return this.getProducts().pipe(
    map(products => products.filter(product => {
      return category === 'affordable' ? product.prixProduit <= 2000000 : product.prixProduit > 2000000;
    }))
  );
}

/*updateProduit(idProduit: number, produitData: any): Observable<any> {
  return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/produits/${idProduit}`, produitData);
}*/
updateProduit(product: any): Observable<any> {
  return this.httpClient.put(`${this.apiUrl}`, product);
}

  }
    /*getProduit(id_produit : number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/produits/${id_produit}`);
    }
   /* getProduitByCategor(categorie_id_cat: number):Observable<any> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/produits/${categorie_id_cat}`);}

    deleteProduit(categorie_id_cat: number):Observable<any> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/${environment.prefix}/produits/${categorie_id_cat}`);
    }

    /*getCategoryById(id_cat: number): Observable<any> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/categories/${id_cat}`);
    }
    getCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/dali`);
    }
    */


