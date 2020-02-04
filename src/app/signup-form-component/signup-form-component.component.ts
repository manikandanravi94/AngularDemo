import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameCustomValidatior } from '../common/input.usernamecustomvalidator';

@Component({
  selector: 'app-signup-form-component',
  templateUrl: './signup-form-component.component.html',
  styleUrls: ['./signup-form-component.component.css']
})
export class SignupFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3),
       UsernameCustomValidatior.cannotContainSpace],[UsernameCustomValidatior.shouldBeUnique]),
    password: new FormControl()
  })

  get username() {
    return this.form.get('username');
  }
  log(){
    console.log(this.form);
  }
/*
we can validate the form by calling the external service and set the whole form error 
if we want to specify the error, we can set it manually in the template by parsing tru the validation errors
*/
  login(){
    this.form.setErrors({invalidUser:"Either username or password is invalid"});
  }

}
