import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListProductComponent } from './client/list-product/list-product.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { BannerAddComponent } from './admin/banner-manager/banner-add/banner-add.component';
import { BannerEditComponent } from './admin/banner-manager/banner-edit/banner-edit.component';

import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { ProductAddComponent } from './admin/product-manager/product-add/product-add.component';
import { SliderComponent } from './client/slider/slider.component';
import { CategoryEditComponent } from './admin/categories-manager/category-edit/category-edit.component';
import { CategoryAddComponent } from './admin/categories-manager/category-add/category-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductManagerComponent,
    BannerAddComponent,
    BannerEditComponent,
    ProductAddComponent,
    SliderComponent,
    CategoryEditComponent, 
    CategoryAddComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClientModule,
    AdminModule, 
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
