import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //this service is used to call the api
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import  {map } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private productUrl ="http://localhost:8080/api/products"
  private categoryUrl = "http://localhost:8080/api/product-category"

  constructor(private httpClient : HttpClient) { }

  getProductList(categoryId:number) : Observable <Product[]> {//this method return a observal array of product. map the Json from spring Data Rest 
                                            // to Product array
   //need to build URL based on category id
   const searchUrl = this.productUrl + '/search/findByCategoryId?id='+categoryId;
   return this.getProduct(searchUrl);
   }

   getProductCategories(): Observable <ProductCategory[]> {//this method return a observal array of productCategory. map the Json from spring Data Rest 
                                                    // to Product array
    //need to build URL based on category id{
      return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
        map(response => response._embedded.productCategory)
      );
   }

   searchProducts(theKeyword: string):Observable<Product[]> {
    const searchUrl = this.productUrl+'/search/findByNameContaining?name='+theKeyword;
    //need to build URL based on kerword
    return this.getProduct(searchUrl);
  }


  // call teh api
  private getProduct(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
  }

   interface GetResponseProduct{
    _embedded:{
      products:Product[];
    }
   }

   interface GetResponseProductCategory{
    _embedded:{
      productCategory:ProductCategory[];
    }
   }
