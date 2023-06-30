import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/pages/students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './public/home/home.component';
import {EvaluacionesComponent} from "./profesor/pages/evaluaciones/evaluaciones.component";
import {SubjectsComponent} from "./subjects/pages/subjects/subjects.component";
import {PersonalDataComponent} from "./personal-data/pages/personal-data/personal-data.component";
import {CoursesDetailComponent} from "./courses-detail/courses-detail.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CoursesDetailComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'exams', component: EvaluacionesComponent},
  { path: 'subjects', component: SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
