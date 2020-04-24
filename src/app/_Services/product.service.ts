import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../_Model/Product';

@Injectable()
export class ProductService {
  api = "https://5ea05ae1eea7760016a91a68.mockapi.io/Product";


  constructor(
    private http: HttpClient,
  ) { }

  getProduts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
  };
  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  };
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
