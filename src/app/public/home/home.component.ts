import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
