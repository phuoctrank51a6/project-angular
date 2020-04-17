import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import {ProductManagerComponent} from './product-manager/product-manager.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [ 
    // ProductManagerComponent, 
    LayoutComponent, 
    ProductAddComponent, 
    EditProductComponent, NotFoundComponent,
  ],
  imports: [
    FormsModule, 
    HttpClientModule, 
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }