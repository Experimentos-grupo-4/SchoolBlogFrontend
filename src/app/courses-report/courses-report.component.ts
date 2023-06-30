import { Component, OnInit } from '@angular/core';

export interface Alumno {
  name: string;
  faltas: number;
  practica: number;
  examenSemestral: number;
  examenFinal: number;
}

const ELEMENT_DATA_ALUMNO: Alumno[] = [
  {name: "Jaimito Jorge Landillo Perez", faltas: 2, practica: 12, examenSemestral: 0, examenFinal: 0},
  {name: "Candy Lalita Vergara", faltas: 20, practica: 18, examenSemestral: 20, examenFinal: 19},
  {name: "Elias Gutarra Sosa", faltas: 8, practica: 8, examenSemestral: 4, examenFinal: 10},
  {name: "Karla Arica Silva", faltas: 1, practica: 16, examenSemestral: 0, examenFinal: 20},
];

@Component({
  selector: 'app-courses-report',
  templateUrl: './courses-report.component.html',
  styleUrls: ['./courses-report.component.css']
})
export class CoursesReportComponent implements OnInit {


  mostrarAlumnosAusentes = false;
  nombreSeccion = '';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarListaAlumnos(nombre: string) {
    this.nombreSeccion = nombre;
    this.mostrarAlumnosAusentes = true;
  }

  regresar() {
    this.mostrarAlumnosAusentes = false;
  }

  displayedColumns: string[] = ['name', 'faltas', 'practica', 'examen semestral', 'examen final'];
  dataSource = ELEMENT_DATA_ALUMNO;

}
