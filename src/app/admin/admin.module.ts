import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// import {ProductManagerComponent} from './product-manager/product-manager.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
// import { ProductAddComponent } from './product-manager/product-add/product-add.component';
import { EditProductComponent } from './product-manager/edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { NewsAddComponent } from './news-manager/news-add/news-add.component';
import { NewsEditComponent } from './news-manager/news-edit/news-edit.component';
import { BannerManagerComponent } from './banner-manager/banner-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesManagerComponent } from './categories-manager/categories-manager.component';



@NgModule({
  declarations: [ 
    LayoutComponent, 
    EditProductComponent, 
    NotFoundComponent,
    NewsManagerComponent,
    NewsAddComponent,
    NewsEditComponent, 
    BannerManagerComponent, CategoriesManagerComponent, 
  ],
  imports: [
    FormsModule, 
    HttpClientModule, 
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }