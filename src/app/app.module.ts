import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/pages/students/students.component';
import { StudentsService } from './students/services/students.service';
import { SidenavComponent } from './public/sidenav/sidenav.component';
import { EvaluacionesComponent } from './profesor/pages/evaluaciones/evaluaciones.component';
import {SubjectsComponent} from "./subjects/pages/subjects/subjects.component";

/** Material modules */
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from './security/services/auth.service';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CoursesComponent } from './courses/courses.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ProfesorService} from "./profesor/services/profesor.service";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    StudentsComponent,
    SignInComponent,
    SidenavComponent,
    CoursesComponent,
    PersonalDataComponent,
    EvaluacionesComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule
  ],
  providers: [StudentsService, AuthService,ProfesorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
