import { Component, OnInit } from '@angular/core';
import { UsuarioSignUp } from '../../models/UsuarioSignup';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: UsuarioSignUp = new UsuarioSignUp();
  mensaje: string = '';
  registrado: boolean = false;
  mostrarMensaje: boolean = false;

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  resetearFormulario() {
    this.usuario.name = '';
    this.usuario.lastname = '';
    this.usuario.email = '';
    this.usuario.address = '';
    this.usuario.birthday = '';
    this.usuario.phone = '';
    this.usuario.password = '';
  }

  repeatPassword: string = '';

  registrarUsuario() {

    if (this.usuario.name &&
        this.usuario.lastname &&
        this.usuario.address &&
        this.usuario.birthday &&
        this.usuario.phone &&
        this.usuario.email &&
        this.usuario.password) {

          if (this.usuario.password === this.repeatPassword) {
            this.AuthService.signup(this.usuario).subscribe(
              response => {
                this.mensaje = "Se registro correctamente!";
                this.registrado = true;
                this.mostrarMensaje = true;

                setTimeout(() => {
                  this.mostrarMensaje = false;
                }, 3000);

                this.resetearFormulario();
              },
              error => {
                this.mensaje = `Ocurrio un error: ${error.error}`;
                this.registrado = false;
                this.mostrarMensaje = true;
                console.log(error);


                setTimeout(() => {
                  this.mostrarMensaje = false;
                }, 3000);
              }
            );
          } else {
            this.mensaje = "Las contraseñas no coinciden!";
            this.registrado = false;
            this.mostrarMensaje = true;

            setTimeout(() => {
              this.mostrarMensaje = false;
            }, 3000);
          }
    }
  }
}
