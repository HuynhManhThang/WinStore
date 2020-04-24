import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/_Model/Product';
// import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-ProductTv',
  templateUrl: './ProductTv.component.html',
  styleUrls: ['./ProductTv.component.css']
})
export class ProductTvComponent implements OnInit {
  // productTV :Product[];
  constructor(
    // private productSer: ProductService,
  ) { }

  ngOnInit() {
    // this.getProducts();
  }
  // getProducts(){
  //   console.log("đến đây ròi")
  //   return  this.productSer.getProdutsTv().subscribe(data => this.productTV=data)
  //   }
}
