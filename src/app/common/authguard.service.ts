import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HeadershareService } from './headershare.service';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

//CanActivate interface is implemented to provide guard for url as yu cannot access the content through url 
//without logging into the app. this will stop the vulnerability
//This concept is useful in preventing url navigation without login
  constructor(private route:Router, private headerShareService: HeadershareService) { }

  canActivate(){
    if(this.headerShareService.isLoggedIn())
    return true;

    this.route.navigate(["/login"]);
    return false;
  }
  
}
