import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validator, Validators, FormGroup,FormArray } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
      });
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
        return ;
    }
    if(this.loginForm.controls.email.value == 'govind@gmail.com' && this.loginForm.controls.password.value == 'password') {
      this.router.navigate(['list-student']);
  }else {
    this.invalidLogin = true;
  }
}
}
