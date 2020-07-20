import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/_Model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user :User;
  userFromGroup:FormGroup;
  submitted = false;
      constructor(
        private formbuilder:FormBuilder,
        private router :Router,
        ) { }

      ngOnInit() {
       this.createForm()
      }
      createForm(){
  this.userFromGroup=this.formbuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(255)]],
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

        alert('Login Success OK '),
      this.router.navigateByUrl('/admin/managerPoduct')

    }

  }
