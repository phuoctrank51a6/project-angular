import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListProductComponent } from './client/list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { from } from 'rxjs';


import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductManagerComponent,
    // AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClientModule,
    AdminModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
