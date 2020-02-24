import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class HeadershareService {

  constructor() { }

  userLoggedIn: boolean =false;

  updateLoginDetail()
  {
    this.userLoggedIn=true;
  }

  isLoggedIn():boolean{
    let token = localStorage.getItem("token");

    
    if(!token){
      this.userLoggedIn=false;
    return false;
  }

    let helper = new JwtHelperService();

    let decodeToken = helper.decodeToken(token);

    //let expirationDate = helper.getTokenExpirationDate(decodeToken);

    //let isExpired = helper.isTokenExpired(decodeToken);
    //console.log(expirationDate);
   // console.log(isExpired);
   return true;
  }
}
