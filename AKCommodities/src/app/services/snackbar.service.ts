import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }
  openSnackbar(message:string){
    this.snackBar.open(message, "ok", {
      duration: 2000, 
      horizontalPosition: 'center',
        verticalPosition: 'bottom',  
  panelClass: ['custom-snackbar'], 
    });
  }
}
