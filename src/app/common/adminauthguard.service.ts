import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HeadershareService } from './headershare.service';

@Injectable({
  providedIn: 'root'
})
export class Adminauthguard implements CanActivate{
  

  constructor(private route: Router, private headerShareService: HeadershareService) { }

  canActivate(){
        if(this.headerShareService.user.role=='admin')
        return true;

        this.route.navigate(["/no-access"]);
        return false;
  }
}
