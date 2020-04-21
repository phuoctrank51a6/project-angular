import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.scss']
})
export class NewsManagerComponent implements OnInit {
  new: New;
  news : New[];
  page = 1;
  pageSize = 10;
  public isCollapsed = true;

  constructor(
    private newsService : NewsService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getNews();
  }
  getNews(){
    this.newsService.getNews().subscribe(data => { this.news  = data })
  }
  delNews(id){
    this.news = this.news.filter(product => product.id != id)
    this.newsService.removeNews(id).subscribe(() => this.router.navigateByUrl('/admin/product-manager'));
  }

}
