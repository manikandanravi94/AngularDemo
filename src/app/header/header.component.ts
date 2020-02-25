import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { HeadershareService } from '../common/headershare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private headerShareService : HeadershareService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("token");
    this.route.navigate(["/login"]);
    this.headerShareService.userLoggedIn=false;
  }

 

 

}
