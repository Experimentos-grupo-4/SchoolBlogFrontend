import { Component, OnInit } from '@angular/core';
import { StudentsService} from "../../../students/services/students.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  usuario: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const usuario = localStorage.getItem('auth');

    console.log(usuario);

    if (usuario) {
      const auth = JSON.parse(usuario);
      this.usuario = auth.user;
    } else {
      this.router.navigate(['/auth/signin']);
    }
  }

  protected readonly origin = origin;
}
