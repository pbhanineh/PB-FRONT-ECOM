import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []; // array will contain the finale datas
  constructor(private productService : ProductService) { } //inject the dependecie between the service and the component

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts(){ //fucntion that call the method created in the service, take the data and put in the product array created here
    this.productService.getProductList().subscribe(
      data => {
        this.products = data //assign the result to the product array

      }
    )
  }

}
