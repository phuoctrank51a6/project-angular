import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ListProductComponent } from './client/list-product/list-product.component';
import { NotFoundComponent } from './client/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component: ListProductComponent},
  // { path: 'sss', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
