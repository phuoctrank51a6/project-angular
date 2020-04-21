import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

const product = Product;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  product: Product;
  products : Product[];
  

  public model: any;



  constructor(
    private productService : ProductService,) { }

  ngOnInit(): void {
    // this.getProduct()
    // console.log(this.getProduct())
  }
  getProduct(){
    this.productService.getProducts().subscribe(data => { this.products  = data})
  }
  
  // search = (text$: Observable<string>) =>
  // text$.pipe(
  //   debounceTime(200),
  //   distinctUntilChanged(),
  //   map(term => term.length < 2 ? []
  //     : this.products.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  // )
}
