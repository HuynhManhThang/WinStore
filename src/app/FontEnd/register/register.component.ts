import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/_Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user :User;
userFromGroup:FormGroup;
submitted = false;
    constructor(
      private formbuilder:FormBuilder
      ) { }

    ngOnInit() {
     this.createForm()
    }
    createForm(){
this.userFromGroup=this.formbuilder.group({
  email:['',[Validators.required,Validators.email]],
  username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(255)]],
  password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(255)]],
  numberphone:['',[Validators.required,Validators.minLength(9)]],
})
    }
    //get để lấy các trường dễ dàng hon
    get u() { return this.userFromGroup.controls;}
    onSubmit() {
      this.submitted = true;

      // dùng lại nếu là invalid
      if (this.userFromGroup.invalid) {
          return;
      }

      alert('Register Success OK :-)\n\n' + JSON.stringify(this.userFromGroup.value))
  }

}
