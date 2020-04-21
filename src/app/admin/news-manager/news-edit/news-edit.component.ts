import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {
  new: New ;
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
    this.editNews();
  }
  editNews(){
    this.route.params.subscribe(data => {
      let {id} = data;
      console.log(id);
      this.newsService.detailNews(id).subscribe(data => 
        // console.log(data)  
        this.new = data
      );
    }) 
    // this.productService.detailProduct();
  }
  updateNews(){
    // this.productService.updateProduct(this.product);
    // console.log(this.product);
    this.newsService.updateNews(this.new).subscribe(() => this.router.navigateByUrl('/admin/news-manager'));
      // console.log('hello')
      // this.product = data
  }

}
