import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  //array of ProdyctCategory
  productCategories :ProductCategory[] =[];
  constructor(private productService : ProductService) //inject the service to call the api
  { }

  ngOnInit() 
  {
    //fucntion that calls a service
    this.listProductCategory();
  
  }
  //this function will call teh service function to call the api
  listProductCategory() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('product Categories=' +JSON.stringify(data))
        this.productCategories = data //assign the result to the product array

      }
    );
    
  }

}
