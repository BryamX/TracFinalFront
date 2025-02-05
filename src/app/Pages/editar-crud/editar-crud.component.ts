import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoginService } from '../../Services/login.service';
import { Usuario } from '../../Services/usuario';

@Component({
  selector: 'app-editar-crud',
  standalone: false,
  
  templateUrl: './editar-crud.component.html',
  styleUrl: './editar-crud.component.css'
})
export class EditarCrudComponent {

   public usuarios: Usuario = new Usuario();

  constructor(private authServices: AuthService, public serviceUsuario: LoginService){

  }
  
  enviarFormulario() {
    console.log("sdfdsfdsfsdf");
  this.serviceUsuario.getUsuariobyId(this.authServices.id_persona).subscribe(
    (resultado: Usuario) => {
      if (resultado) {
        this.usuarios = resultado; // Asegúrate de que `usuario` esté definido en la clase
       
      } else {
        console.log('No se encontró usuario con ese ID.');
      }
    },
    (error) => {
      console.error('Error al obtener usuario:', error);
    }
  );
}

}
