import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  
  form = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    'price': new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')
    ]),
    'img': new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]),
    'desc': new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    'status': new FormControl('', [
      Validators.required,
    ]),
  })
  
get name() { return this.form.get('name'); }
get img() { return this.form.get('img'); }
get price() { return this.form.get('price'); }
get desc() { return this.form.get('desc'); }
get status() { return this.form.get('status'); }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  addProduct(){
    // this.productService.addProduct(this.product);
    this.productService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/admin/product-manager'));
  }

}