import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../courses/Dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

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

  url: string = "http://localhost:8090/demo/api/authenticate";
  
  submitForm(){
    this.body={username:
      this.username.value,
      password: this.password.value
    };
     this.service.postUser(this.url,JSON.stringify(this.body)).subscribe(response =>{
    if(response.status=="OK"){
      
    }   
    }
     );
  }

}
