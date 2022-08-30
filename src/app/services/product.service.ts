import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //this service is used to call the api
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import  {map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl ="http://localhost:8080/api/products"

  constructor(private httpClient : HttpClient) { }

  getProductList() : Observable <Product[]> {//this method return a observal array of product. map the Json from spring Data Rest 
                                            // to Product array
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
   }
  }

   interface GetResponse{
    _embedded:{
      products:Product[];
    }
   }
