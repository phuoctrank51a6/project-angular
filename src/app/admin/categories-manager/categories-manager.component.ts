import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-manager',
  templateUrl: './categories-manager.component.html',
  styleUrls: ['./categories-manager.component.scss']
})
export class CategoriesManagerComponent implements OnInit {
  category: Category;
  categories : Category[];
  page = 1;
  pageSize = 10;
  public isCollapsed = true;

  constructor(
    private categoryService : CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

    ngOnInit(): void {
      this.getCategories();  
    }
    getCategories(){
      this.categoryService.getCategories().subscribe(data => { this.categories  = data })
    }
    delCategory(id){
      // console.log(this.product);
      this.categories = this.categories.filter(category => category.id != id)
      this.categoryService.removeCategory(id).subscribe(() => this.router.navigateByUrl('/admin/categories-manager'));
    }

}
