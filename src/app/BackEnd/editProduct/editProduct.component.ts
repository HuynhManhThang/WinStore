import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-editProduct',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css']
})
export class EditProductComponent implements OnInit {
  products :Product[];
  product: Product = new Product();
  userFromGroup: FormGroup;
  submitted = false;
  constructor(
    private pService: ProductService,
    private aRouter : ActivatedRoute,
    private router :Router,
    private formbuilder: FormBuilder

  ) { }

  ngOnInit() {
this.getProduct();
this.createForm();
  }
  getProduct(){
    this.aRouter.params.subscribe(param =>{
    this.pService.getProduct(param.id).subscribe(data => {
      this.product =data
    });
    });
    }
    editProduct(){

    this.pService.editProduct(this.product).subscribe(data => {
      alert("Save Success")
      this.router.navigateByUrl('/admin/managerPoduct')
      console.log(data)
    } )
    }
    createForm() {
      this.userFromGroup = this.formbuilder.group({
        name: [ [Validators.required, Validators.maxLength(255)]],
        price: [ [Validators.required, Validators.maxLength(255)]],
        discout: [[Validators.required, Validators.maxLength(255)]],
        img: [ [Validators.required]],
        imgdetail: [[Validators.required]],
        desc: [ [Validators.required]],
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
      this.editProduct()
    }
}
