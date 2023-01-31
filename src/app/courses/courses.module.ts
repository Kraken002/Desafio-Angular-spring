import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from './courses/shared/app-material/app-material.module';
import { CatergoriaPipe } from '../shared/pipes/catergoria.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CatergoriaPipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,

  ]
})
export class CoursesModule { }
