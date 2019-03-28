import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { StudentService } from '../service/student.service';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  public studentId;
  student:Student;
  submitted : boolean=false;
  editForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private studentService:StudentService) { }

  ngOnInit() {
     this.studentId = localStorage.getItem("editStudentId");
    
    this.editForm =  this.formBuilder.group({
      id:[],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required]
    });
    this.studentService.getStudentById(this.studentId).subscribe(data =>{
      this.editForm.setValue(data)});
  }

  onSubmit(){
    this.submitted=true;
    if(this.editForm.invalid){
      return ;
    }
    this.studentService.updateStudent(this.studentId,this.editForm.value).pipe(first())
    .subscribe(data =>{
      this.router.navigate(['list-student']);
    },
    error=>{
      alert('error');
    });
  }
}
