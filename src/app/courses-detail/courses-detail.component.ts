import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesReportComponent } from '../courses-report/courses-report.component';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  semanas = [
    {
      name: "Semana 1",
      activo: true
    },
    {
      name: "Semana 2",
      activo: false
    },
    {
      name: "Semana 3",
      activo: false
    },
    {
      name: "Semana 4",
      activo: false
    },
    {
      name: "Semana 5",
      activo: false
    },
    {
      name: "Semana 6",
      activo: false
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  activarSemana(name: string) {
    for (let i = 0; i < this.semanas.length; i++) {
      if (this.semanas[i].name === name) this.semanas[i].activo = true;
      else this.semanas[i].activo = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CoursesReportComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
