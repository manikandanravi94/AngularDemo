import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../courses/Dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password : new FormControl()
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  body:any;

  url: string = "http://localhost:8080/api/authenticate";
  
  submitForm(){
    this.body={name:
      this.username.value,
      passkey: this.password.value
    };
     this.service.postUser(this.url,JSON.stringify(this.body)).subscribe(response =>{
       console.log(response);}
     );
  }

}
