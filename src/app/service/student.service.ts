import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders } from '@angular/common/http';
import {Student} from "../model/student.model";
import { Observable } from 'rxjs';

/*const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };*/
@Injectable()
export class StudentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8989/students/';
  
  
  getStudents() {
    //httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8989');
     return this.http.get<Student[]>(this.baseUrl+'list');
  }

  getStudentById(id: number) {
    return this.http.get<Student>(this.baseUrl + 'list/' + id);
  }

  createStudent(student: Student) {
    console.log(student)
    return this.http.post(this.baseUrl+'create', student);
  }

  updateStudent(id:number,student: Student) {
    console.log('inside the delte method',student)
    return this.http.put(this.baseUrl + 'update/'+id,student);
  }

  deleteStudent(id: number) {
    console.log('inside the delte method')
    return this.http.delete(this.baseUrl + 'delete/' + id);
  }
}

