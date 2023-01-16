import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = './assets/cursos.json'


  constructor(public HttpClient: HttpClient) { }

  list() {
   return this.HttpClient.get<Course[]>(this.API).pipe(
    tap(courses => console.log(courses))
   );
  }
}
