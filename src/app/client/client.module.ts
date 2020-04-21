import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ClientRoutingModule } from './client-routing.module';

import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
  ],
  declarations: [
    // ListProductComponent,
    LayoutComponent,
    NotFoundComponent,
    ProductDetailComponent,
    // SliderComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
  ],
})
export class ClientModule { }
