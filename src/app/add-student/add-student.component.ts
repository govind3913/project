import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student.model";
import {Router} from "@angular/router";
import {StudentService} from "../service/student.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students: Student[];
  submitted: boolean = false;
  constructor(private router: Router, private studentService: StudentService,private formBuilder: FormBuilder) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }
  onSubmit(buttonType) {
      this.submitted=true;
      if(buttonType==='Cancel'){
        this.router.navigate(['list-student']);
      }else{
        if(this.addForm.invalid){
            return ;
        }
        this.studentService.createStudent(this.addForm.value)
          .subscribe( data => {
            this.router.navigate(['list-student']);
          });
      }
  }

}
