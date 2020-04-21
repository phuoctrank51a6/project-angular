import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {
  new: New = new New();
  form = new FormGroup({
    'id': new FormControl(null),
    'title': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    'img': new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]),
    'content': new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
  })
  
get title() { return this.form.get('title'); }
get img() { return this.form.get('img'); }
get content() { return this.form.get('content'); }

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  addNews(){
    // this.productService.addProduct(this.product);
    this.newsService.addNews(this.new).subscribe(data => this.router.navigateByUrl('/admin/news-manager'));
  }

}
