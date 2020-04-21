import { Component, OnInit } from "@angular/core";
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.scss"]
})
export class ListProductComponent implements OnInit {
  selected: Product;
  products : Product[];
  constructor(
    private productsService : ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    // return this.products = this.productsService.getProducts();
    // console.log(this.products);
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      this.products= data
    })
  }
  removeIttem(id){
    // console.log(id);
    // console.log(this.products);
    // this.products = this.products.filter(product => product.id != id);
    // this.products = this.productsService.removeProduct(id);
    this.productsService.removeProduct(id).subscribe(() => this.router.onSameUrlNavigation);
  }
  detailProduct(product){
    // this.selected = this.productsService.detailProduct(product);
  }
}
