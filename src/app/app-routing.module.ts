import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/pages/students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './public/home/home.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {EvaluacionesComponent} from "./profesor/pages/evaluaciones/evaluaciones.component";
import {SubjectsComponent} from "./subjects/pages/subjects/subjects.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'evaluaciones', component: EvaluacionesComponent},
  { path: 'subjects', component: SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
