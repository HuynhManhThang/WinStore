// import { Cart } from './../../_Model/cart';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent implements OnInit {
  products: Product[];
  product: Product = new Product();
  userFromGroup: FormGroup;
  submitted = false;
  prod: Product;
  constructor(
    private pService: ProductService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.getProduct();
    this.createForm()
  }
  getProduct() {
    this.aRouter.params.subscribe(param => {
      this.pService.getProduct(param.id).subscribe(data => {
        this.product = data
      });
    });
  }

  createForm() {
    this.userFromGroup = this.formbuilder.group({
      name: [[Validators.required, Validators.maxLength(255)]],
      price: [[Validators.required, Validators.maxLength(255)]],
      discout: [[Validators.required, Validators.maxLength(255)]],
      img: [[Validators.required]],
      imgdetail: [ [Validators.required]],
      desc: [[Validators.required]],
    })
  }
  //get để lấy các trường dễ dàng hon
  get u() { return this.userFromGroup.controls; }
  onSubmit() {
    this.submitted = true;

    // dùng lại nếu là invalid
    if (this.userFromGroup.invalid) {
      return;
    }
    alert("Add Success")
    this.addProducts()
  }
  addProducts() {
    this.submitted = true;
    this.pService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/managerPoduct')
    });
  }
}
