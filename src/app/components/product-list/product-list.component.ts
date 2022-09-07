import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []; // array will contain the finale datas
  currentCategoryId :number =1; //id that we will pass as a parameter
  searchMode : boolean = false; 
  constructor(private productService : ProductService, //inject the dependecie between the service and the component
              private route:ActivatedRoute) //inject the activated roite.useful for acessing route parameter
               { }  

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts(){ //fucntion that call the method created in the service, take the data and put in the product array created here
    this.searchMode = this.route.snapshot.paramMap.has("keyword");
    if(this.searchMode){ //if we are on search mode ==> hadle the search 
      this.handleSearchProducts();
    }else{ //if we are are not on search mode ==> list the products
      this.handelListProducts();
    }
  }

  handelListProducts(){
    //check if "id" parameter is available
    //route => use the active route
    //snapshot => state of route at this given moment in time
    //paramMap => map of all the route parametres
    const hasCategoryId : boolean = this.route.snapshot.paramMap.has("id");
    if(hasCategoryId){
      // read the id and convert it into a number using the + symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id")!;
    }else{
      //no category id available ==> set default id = 1
      this.currentCategoryId = 1;
    }
    //get the products of the category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data //assign the result to the product array

      }
    );

  }
  handleSearchProducts(){
    //get the keryword
    const theKeyword : string = this.route.snapshot.paramMap.get("keyword")!;

    //search for the product by keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data //assign the result to the product array

      }
    );

  }

}
