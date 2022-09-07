import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  doSearch(value : string){
    console.log(value);
    //navigateByUrl route the data to our search route it willbe handled by the productListComponent
    this.router.navigateByUrl(`search/${value}`); //acccess the rout search/:keyword created in the app.module.ts

  }
}
