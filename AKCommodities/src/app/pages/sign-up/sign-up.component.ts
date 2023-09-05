import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myForm: FormGroup;
  constructor(private userService:UserService,private router:Router,private snackBarService:SnackbarService){
  this.myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, ]),
  });
  if(this.userService.isUserLogedIn)
  this.router.navigate(['/dashboard']);

}
onSubmit() {

  if (this.myForm.valid) {
    if(this.userService.userAccounts.indexOf(this.myForm.value)==-1)
    this.userService.userAccounts.push(this.myForm.value);
    this.userService.isUserLogedIn=true;
    this.snackBarService.openSnackbar("Account Created SuccessFully");
    this.router.navigate(['/dashboard'])
  }
}
}
