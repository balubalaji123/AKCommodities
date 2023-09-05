import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private router:Router,private userService:UserService,private snackBarService:SnackbarService){

}
logout(){
this.userService.isUserLogedIn=false;
this.snackBarService.openSnackbar("Logged out successfully");
this.router.navigate(['/login']);
}
}
