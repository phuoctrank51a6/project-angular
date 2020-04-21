import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category: Category = new Category();
  form = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  })
  
get name() { return this.form.get('name'); }

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  addCategory(){
    // this.productService.addProduct(this.product);
    this.categoryService.addCategory(this.category).subscribe(data => this.router.navigateByUrl('/admin/categories-manager'));
  }
}
