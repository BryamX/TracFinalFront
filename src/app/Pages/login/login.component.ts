import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../Services/usuario';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //traer informacion del formulario
  public serchform : FormGroup;

  username: string = ''; // Inicializa la variable de usuario
  password: string = ''; // Inicializa la variable de contraseña

  constructor(private router:Router, public loginService: LoginService, private fb: FormBuilder, private restriccion: AuthService){
   //para obtener la informacion de los label 
    this.serchform = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],

    });

  }

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Aquí puedes manejar la lógica de autenticación
    this.router.navigate(["/inicio"])

  }

  registrase_usuario(): void{
    this.router.navigate(["/registrarse"])
  }

  invitado(): void{
    Swal.fire(`Bienvenid@ INVITADO`, 'Inicio de sesion correcto', 'success');
    this.router.navigate(["/nosotros"])

  }

  validar(): void{
    const usu = this.serchform.value.username;
    const contra = this.serchform.value.password;

    console.log(usu+contra)

    if  ( usu === '' || contra === ''){
     Toast.fire({
        icon: "error",
        title: "Usuario o Contraseña Vacíos",
        footer: "Por favor, complete ambos campos"
      });
      return;
    }
    this.loginService.getUsuario().subscribe(
      (result)=>{
        if ( Array.isArray(result) && result.length > 0 ){
          const usuarioEncontrados = result as Usuario[];
          const usuarioEncontrado = usuarioEncontrados.find(usuario => usuario.usuario === usu && usuario.pasword === contra);
          if (usuarioEncontrado){

            Swal.fire(`Bienvenid@ ${usu}`, 'Inicio de sesion correcto', 'success');
            this.restriccion.login();
            ////ECONTRAR A LA PERSONA usar get
            this.restriccion.id_persona=usuarioEncontrado.id;
            this.router.navigate(["/nosotros"])
            

          }else{
            Swal.fire(`error`, 'Inicio de sesión incorrecto', 'error');
          }
        }
      },
      (error)=>{
        Swal.fire(`error`, 'Inicio de sesión incorrecto', 'error');
      }
    );
  }


}
