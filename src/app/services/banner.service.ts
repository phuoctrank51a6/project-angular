import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Chuyên sự dụng để xử lý bất đồng bộ
import { Observable } from 'rxjs';
import { Banner } from '../models/Banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  selected: Banner;
  api = 'https://5e73188dbe8c5400165c343d.mockapi.io/banner';
  constructor(
    private http: HttpClient
  ) { }
  getBanner(): Observable<Banner[]>{
    // console.log(2);
    return this.http.get<Banner[]>(this.api);
  }
  detailBanner(id: number): Observable<Banner>{
      return this.http.get<Banner>(`${this.api}/${id}`); 
  }
  addBanner(banner): Observable<Banner>{
    // console.log(banner);
    return this.http.post<Banner>(`${this.api}`, banner);
 
  }
  updateBanner(banner): Observable<Banner>{
    return this.http.put<Banner>(`${this.api}/${banner.id}`, banner);
  }
  removeBanner(id: number): Observable<Banner>{
    // console.log(id);
    return this.http.delete<Banner>(`${this.api}/${id}`); 
  }
}
