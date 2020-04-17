import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { data } from '../../MockProduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product ;
  // editPform: FormGroup;

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
    this.productService.updateProduct(this.product).subscribe(() => this.router.navigateByUrl('/admin/list-product'));
      // console.log('hello')
      // this.product = data
  }
}
