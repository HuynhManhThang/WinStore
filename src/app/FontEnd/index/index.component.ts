import { Product } from './../../_Model/Product';
import { ProductService } from './../../_Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
keyword;
products :Product[];

  constructor(
    private productSer: ProductService,
  ) {
   }
  ngOnInit() {
  }
  search(){
    console.log("đã đến index r")
    return  this.productSer.searchProduct(this.keyword).subscribe(data => this.products=data )
   }
}
