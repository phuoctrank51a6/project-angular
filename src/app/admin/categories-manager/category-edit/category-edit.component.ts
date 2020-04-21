import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
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
    this.editCategory();
  }
  editCategory(){
    this.route.params.subscribe(data => {
      let {id} = data;
      console.log(id);
      this.categoryService.detailCategory(id).subscribe(data => 
        // console.log(data)  
        this.category = data
      );
    }) 
  }
  updateCategory(){
    this.categoryService.updateCategory(this.category).subscribe(() => this.router.navigateByUrl('/admin/categories-manager'));
  }

}
