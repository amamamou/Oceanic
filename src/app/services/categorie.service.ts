import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { }
    getListCategories(): Observable<any>
    {
      return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/categories`)
    }
    postCategories(data:any):Observable<any>
    {
      return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/categories`,data)
    }
    updateCategorie(data: any):Observable<any>
    {
      console.log(data);
      return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/categories/${data.id_cat}`,
      {"nom_cat":data.nom_cat});
    }

      getOneCategorie(id_cat: number):Observable<any>{
        return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/categories/${id_cat}`)
      }
    }
