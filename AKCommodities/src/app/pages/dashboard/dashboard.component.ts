import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public studentsService:StudentsService,private router:Router,private snackBarService:SnackbarService){}
  onStudentSelected(index:any){
    this.router.navigate(['/student-details',index])
  }
  processFile(event: any): void {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const fileContent = fileReader.result as string;
        try {
          if(selectedFile.name.indexOf(".json")==-1){
            this.snackBarService.openSnackbar("Not a valid json file");
            return
          }
          const jsonData = JSON.parse(fileContent);
          for(let student of jsonData){
            student['studentId']=this.studentsService.studentsData.length+2;
            this.studentsService.studentsData.push(student);
          }
        this.snackBarService.openSnackbar("Students Added SuccessFully");

        } catch (error) {
          console.error('Error parsing JSON:', error);
        this.snackBarService.openSnackbar("File Data Corrupted");

        }
      };

      fileReader.readAsText(selectedFile);
    } else {
      // Handle case when no file is selected
    }
  }
}
