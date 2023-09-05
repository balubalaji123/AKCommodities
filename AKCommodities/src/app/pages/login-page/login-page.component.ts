import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  myForm: FormGroup;

  constructor(private userService:UserService,private router:Router,private snackBarService:SnackbarService) {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, ]),
    });
    if(this.userService.isUserLogedIn){
      this.router.navigate(['/dashboard']);
    }
  }
  onSubmit() {

    if (this.myForm.valid) {
      if(this.userService.isUserExists(this.myForm.value)){
        this.userService.isUserLogedIn=true;
        this.snackBarService.openSnackbar("LoggedIn SuccessFully");
        this.router.navigate(['/dashboard']);
      }
      else{
        this.snackBarService.openSnackbar("User Doesn't exists, please signup once");
      }
    }
  }
}
