import { Injectable } from '@angular/core';
import { Product } from './Product';
import { data } from './MockProduct';
import { HttpClient } from '@angular/common/http';
// Chuyên sự dụng để xử lý bất đồng bộ
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selected: Product;
  // products = data;
  api = 'https://5e73188dbe8c5400165c343d.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
  // removeProduct(id: number): Observable<product>{
    // console.log(id);
    // return this.products = this.products.filter(product => product.id != id);
    // console.log(this.products);
  // }
  detailProduct(id: number): Observable<Product>{
    // console.log(id);
    // const product = this.products.find(product => product.id == id);
    // console.log(product);
    // if (product) {
      return this.http.get<Product>(`${this.api}/${id}`); 
  }
  addProduct(product): Observable<Product>{
    console.log(product);
    // let length = this.products.length + 1;
    // console.log(length);
    // let fakeObj = {id: length, ...product};
    // this.products.push(fakeObj);
    // console.log(this.products);
    return this.http.post<Product>(`${this.api}`, product);
 
  }
  updateProduct(product): Observable<Product>{
    // console.log(product);
    // for(let i = 0;i < this.products.length; i++){
    //   if(this.products[i].id == product.id){
    //     console.log(this.products[i]);
    //     this.products[i]=product;
    //   }
    // }
    // console.log(this.products)\
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  removeProduct(id: number): Observable<Product>{
    // console.log(id);
    return this.http.delete<Product>(`${this.api}/${id}`); 
  }
}
