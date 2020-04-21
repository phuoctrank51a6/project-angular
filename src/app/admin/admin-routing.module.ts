import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import {ProductManagerComponent} from './product-manager/product-manager.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductAddComponent } from './product-manager/product-add/product-add.component';
import { EditProductComponent } from './product-manager/edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryAddComponent } from './categories-manager/category-add/category-add.component';
import { CategoryEditComponent } from './categories-manager/category-edit/category-edit.component';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { NewsAddComponent } from './news-manager/news-add/news-add.component';
import { NewsEditComponent } from './news-manager/news-edit/news-edit.component';
import { BannerManagerComponent } from './banner-manager/banner-manager.component';
import { BannerAddComponent } from './banner-manager/banner-add/banner-add.component';
import { BannerEditComponent } from './banner-manager/banner-edit/banner-edit.component';
import { CategoriesManagerComponent } from './categories-manager/categories-manager.component';

const adminRoutes: Routes =[
  { 
    path: 'admin', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'product-manager', pathMatch: 'full'},
      { path: 'product-manager', component: ProductManagerComponent },
      { path: 'add-product', component: ProductAddComponent },
      { path: 'edit-product/:id' ,component: EditProductComponent},

      { path: 'categories-manager' ,component: CategoriesManagerComponent},
      { path: 'add-category' ,component: CategoryAddComponent},
      { path: 'edit-category/:id' ,component: CategoryEditComponent},

      { path: 'news-manager' ,component: NewsManagerComponent},
      { path: 'add-news', component: NewsAddComponent },
      { path: 'edit-news/:id' ,component: NewsEditComponent},
      
      { path: 'banner-manager' ,component: BannerManagerComponent},
      { path: 'add-banner', component: BannerAddComponent },
      { path: 'edit-banner/:id' ,component: BannerEditComponent},
      { path: '**' , component: NotFoundComponent}
    ]
     },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }