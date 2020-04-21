import { Injectable } from '@angular/core';
import { New } from '../models/News';
import { HttpClient } from '@angular/common/http';
// Chuyên sự dụng để xử lý bất đồng bộ
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  selected: New;
  api = 'https://5e73188dbe8c5400165c343d.mockapi.io/news';
  constructor(
    private http: HttpClient
  ) { }
  getNews(): Observable<New[]>{
    // console.log(2);
    return this.http.get<New[]>(this.api);
  }
  detailNews(id: number): Observable<New>{
      return this.http.get<New>(`${this.api}/${id}`); 
  }
  addNews(news): Observable<New>{
    // console.log(news);
    return this.http.post<New>(`${this.api}`, news);
 
  }
  updateNews(news): Observable<New>{
    return this.http.put<New>(`${this.api}/${news.id}`, news);
  }
  removeNews(id: number): Observable<New>{
    // console.log(id);
    return this.http.delete<New>(`${this.api}/${id}`); 
  }
}
