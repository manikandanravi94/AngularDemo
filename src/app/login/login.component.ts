import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../courses/Dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeadershareService } from '../common/headershare.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService, private route: Router, private headerShare: HeadershareService
    ,private activateRoute: ActivatedRoute) { }
//activatedroute is used to get the query param passed from the auth guard service.. 
// snapshot of the url which was clicked earlier can be accessed here.. this will help them to redirect 
// to corresponding url after login
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

  invalidUser:boolean;
  
  submitForm(){
    this.body={username:
      this.username.value,
      password: this.password.value
    };
     this.service.post(this.url,JSON.stringify(this.body)).subscribe(response =>{
    if(response.status=="OK"){
      let returnUrl=this.activateRoute.snapshot.queryParamMap.get('returnUrl');
      localStorage.setItem('token',response.token);
      this.headerShare.updateLoginDetail();
      this.route.navigate([returnUrl || '/home']);
    }   
    else{
       this.invalidUser=true;
    }
    }
     );
  }
}
