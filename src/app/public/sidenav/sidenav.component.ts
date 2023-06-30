import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {"name":"Home", "route":"",icon:"home"},
    {"name":"Datos personales", "route":"personal-data",icon:"contacts"},
    {"name":"Cursos", "route":"courses",icon:"school"},
    {"name":"Evaluaciones", "route":"exams",icon:"check"},
    {"name":"Calificaciones", "route":"subjects",icon:"grade"},
    {"name":"Cerrar sesión", "route":"Cerrar sesión",icon:"logout"}

  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit() {
  }

  cerrarSesion(name: string) {

    if (name === "Cerrar sesión") {
      localStorage.removeItem('auth');
      this.router.navigate(['/auth/signin']);
    }

  }

}
