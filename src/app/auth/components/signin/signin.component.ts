import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioSignIn } from '../../models/UsuarioSignIn';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario: UsuarioSignIn = new UsuarioSignIn();
  mensaje: string = '';
  mostrarError: boolean = false;

  constructor(private AuthService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.usuario.email && this.usuario.password) {
      this.AuthService.signin(this.usuario).subscribe(
        response => {
          localStorage.setItem('auth', JSON.stringify(response));
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          this.mostrarError = true;
          this.mensaje = error.error;

          setTimeout(() => {
            this.mostrarError = false;
          }, 3000);
        }
      )
    }
  }

}
