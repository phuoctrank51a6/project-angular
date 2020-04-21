import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddProductComponent } from './add-product/add-product.component';
// import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: LayoutComponent,
      children: [
        { path: '', component: ListProductComponent},
        { path: 'product-detail/:id', component: ProductDetailComponent},
        { path: 'contact', component: ContactComponent },
        { path: 'about', component: AboutComponent },
        { path: 'service', component: ServiceComponent },
      ]
  },
//   { path: 'product-manager', component: ProductManagerComponent},
//   { path: 'add-product' ,component: AddProductComponent},
//   { path: 'edit-product/:id', component: EditProductComponent },
  // { path: '**', component: NotFoundComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
