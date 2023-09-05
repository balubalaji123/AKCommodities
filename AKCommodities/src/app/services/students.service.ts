import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  public studentsData=[
    {studentId:1,name:"balaji",age:25,fatherName:"balaji father",motherName:"balaji mother",percentage:90},
    {studentId:2,name:"balaji 2",age:26,fatherName:"balaji 2 father",motherName:"balaji 2 mother",percentage:92},
    {studentId:3,name:"balaji 3",age:27,fatherName:"balaji 3 father",motherName:"balaji 3 mother",percentage:94},
    {studentId:4,name:"balaji 4",age:28,fatherName:"balaji 4 father",motherName:"balaji 4 mother",percentage:96},
    {studentId:5,name:"balaji 5",age:29,fatherName:"balaji 5 father",motherName:"balaji 5 mother",percentage:98}
    
  ]
}
