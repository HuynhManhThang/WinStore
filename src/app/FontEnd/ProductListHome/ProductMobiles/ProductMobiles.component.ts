import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-ProductMobiles',
  templateUrl: './ProductMobiles.component.html',
  styleUrls: ['./ProductMobiles.component.css']
})
export class ProductMobilesComponent implements OnInit {

  page=1;
  pageSize=6;
  product :Product[];
  constructor(
    private productSer: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    return  this.productSer.getProduts().subscribe(data => this.product=data)
    }

}
