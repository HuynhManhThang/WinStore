import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/_Model/Product';
// import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-ProductLargeAppliances',
  templateUrl: './ProductLargeAppliances.component.html',
  styleUrls: ['./ProductLargeAppliances.component.css']
})
export class ProductLargeAppliancesComponent implements OnInit {
  // productlagAp :Product[];
  constructor(
    // private productSer: ProductService,
  ) { }

  ngOnInit() {
    // this.getProducts();
  }
  // getProducts(){
  //   console.log("đến đây ròi")
  //   return  this.productSer.getProdutsLageAp().subscribe(data => this.productlagAp=data)
  //   }

}
