import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(HttpClient:HttpClient) { }

  list():Course[]{
    return[
        { _id:"1", name:'Angular', category: 'front-end'}
    ];
  }
}
