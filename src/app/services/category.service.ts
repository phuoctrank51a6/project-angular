import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
// Chuyên sự dụng để xử lý bất đồng bộ
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selected: Category;
  api = 'https://5e73188dbe8c5400165c343d.mockapi.io/categories';
  constructor(
    private http: HttpClient
  ) { }
  getCategories(): Observable<Category[]>{
    // console.log(2);
    return this.http.get<Category[]>(this.api);
  }
  detailCategory(id: number): Observable<Category>{
      return this.http.get<Category>(`${this.api}/${id}`); 
  }
  addCategory(category): Observable<Category>{
    console.log(category);
    return this.http.post<Category>(`${this.api}`, category);
 
  }
  updateCategory(category): Observable<Category>{
    return this.http.put<Category>(`${this.api}/${category.id}`, category);
  }
  removeCategory(id: number): Observable<Category>{
    // console.log(id);
    return this.http.delete<Category>(`${this.api}/${id}`); 
  }
}
