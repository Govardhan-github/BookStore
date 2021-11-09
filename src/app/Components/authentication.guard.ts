import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import {AuthgaurdService } from 'src/app/Services/Authgaurd/authgaurd.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthGuardService:AuthgaurdService , private router: Router) { }
  canActivate(): boolean {
    if (!this.AuthGuardService.gettoken()) {
      this.router.navigateByUrl("/login");
      console.log("login Success")
    }
    return this.AuthGuardService.gettoken();

  }
  
}
