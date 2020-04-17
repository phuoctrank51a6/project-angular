import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import {ProductManagerComponent} from './product-manager/product-manager.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

const adminRoutes: Routes =[
  { 
    path: 'admin', 
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'list-product', pathMatch: 'full'},
      { path: 'list-product', component: ProductManagerComponent },
      { path: 'add-product', component: ProductAddComponent },
      { path: 'edit-product/:id' ,component: EditProductComponent},
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