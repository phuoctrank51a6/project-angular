import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.detailProduct();
  }
  detailProduct(){
    this.route.params.subscribe(data => {
      let {id} = data;
      this.productService.detailProduct(id).subscribe(data => 
        // console.log(data)  
        this.product = data 
      );
    }) 
  }

}
