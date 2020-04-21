import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product ;
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
    // private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.editProduct();
  }
  editProduct(){
    this.route.params.subscribe(data => {
      let {id} = data;
      console.log(id);
      this.productService.detailProduct(id).subscribe(data => 
        // console.log(data)  
        this.product = data
      );
    }) 
    // this.productService.detailProduct();
  }
  updateProduct(){
    // this.productService.updateProduct(this.product);
    // console.log(this.product);
    this.productService.updateProduct(this.product).subscribe(() => this.router.navigateByUrl('/admin/product-manager'));
      // console.log('hello')
      // this.product = data
  }
}
