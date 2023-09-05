import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
   studentDetails:any;
constructor(private studentService:StudentsService,private route: ActivatedRoute,private router:Router){

}
ngOnInit() {
  // Subscribe to the route parameters observable
  this.route.params.subscribe(params => {
    this.studentDetails=this.studentService.studentsData[params['id']];
 });
}

goBack(){
  this.router.navigate(['/dashboard'])
 }
}
