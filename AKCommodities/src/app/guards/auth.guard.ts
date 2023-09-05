import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private userService:UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Implement your authentication logic here.
    const isAuthenticated = this.userService.isUserLogedIn;

    if (isAuthenticated) {
      return true; // Allow access to the route
    } else {
      // Redirect to a login page or another route if not authenticated
      this.router.navigate(['/login']);
      return false; // Block access to the route
    }
  }
}
