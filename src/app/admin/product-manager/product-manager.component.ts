import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  product: Product;
  products : Product[];
  page = 1;
  pageSize = 10;
  public isCollapsed = true;


  constructor(
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getProduct();  
  }
  getProduct(){
    this.productService.getProducts().subscribe(data => { this.products  = data })
  }
  delProduct(id){
    // console.log(this.product);
    this.products = this.products.filter(product => product.id != id)
    this.productService.removeProduct(id).subscribe(() => this.router.navigateByUrl('/admin/product-manager'));
    // navigateByUrl('/product-manager'));
    // this.route.params.subscribe(data => {
    //   let {id} = data;
    //   console.log(id);
    //   this.productService.detailProduct(id).subscribe(data => 
    //     console.log(data)  
    //     this.product = data
    //   );
    // }) 
    // this.productsService.removeProduct(id).subscribe(data => {
    //   this.products= data
    // })
    // console.log(id);
    // this.products = this.productsService.removeProduct(id);
  }

}
