import { Product } from './../../_Model/Product';
import { ExcelServiceService } from './../../_Services/ExcelService.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-managerProduct',
  templateUrl: './managerProduct.component.html',
  styleUrls: ['./managerProduct.component.css']
})
export class ManagerProductComponent implements OnInit {
  page = 1;
  pageSize = 10;
  searchText;
  keyword;
  products: Product[];
data :Product;
  constructor(
    private productSer: ProductService,
    private excelService:ExcelServiceService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    return this.productSer.getProduts().subscribe(data => this.products = data)
  }
  removeItem(id) {
    this.productSer.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id);
      alert("Delete Success")
    })
  }
  search(){
    return this.productSer.searchProduct(this.keyword).subscribe(data => this.products = data)
  }
  exportAsXLSX(){
    this.excelService.exportAsExcelFile(this.products, 'HuynhManhThang56789');
 }

}
