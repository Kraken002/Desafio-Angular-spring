import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:any = Observable<Course[]>;
displayedColumns = ['name', 'category'];



  constructor( public CoursesService : CoursesService){
    // this.courses=[]
this.courses = this.CoursesService.list();;
 }

  ngOnInit(): void {

  }
}
