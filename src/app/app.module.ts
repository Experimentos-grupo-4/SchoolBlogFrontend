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
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { AuthService } from './security/services/auth.service';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import { CoursesComponent } from './courses/courses.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ProfesorService} from "./profesor/services/profesor.service";
import { ComponentNameComponent } from './component-name/component-name.component';


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
    SubjectsComponent,
    ComponentNameComponent
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
