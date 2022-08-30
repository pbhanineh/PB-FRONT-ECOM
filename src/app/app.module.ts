import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule} from'@angular/common/http';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //to ipmport the http client for the api
  ],
  providers: [ProductService], //to ijnect this service in all the application modul
  bootstrap: [AppComponent]
})
export class AppModule { }
