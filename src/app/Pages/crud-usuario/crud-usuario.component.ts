import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuario_registro } from '../../Services/registrar_usuario/usuario_registros';
import { RegistrarUsuService } from '../../Services/registrar_usuario/registrar-usu.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-usuario',
  standalone: false,
  
  templateUrl: './crud-usuario.component.html',
  styleUrl: './crud-usuario.component.css'
})
export class CrudUsuarioComponent implements OnInit{

  public registerForm: FormGroup;
  //relacion de donde vamos a traer los atributos
  public usuario: usuario_registro = new usuario_registro();

  constructor(private fb: FormBuilder,public regi_usu: RegistrarUsuService, private rutas:Router) {///agrgas en el contructor el service


    this.registerForm = this.fb.group({
      usuario: ['', Validators.required],
      pasword: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      porcentaje_de_discapacidad: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      carnet_discapacidad: [false, Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numero_carnet:['001']
    });
   }

  onSubmit(): void {//envaras datos al back
    console.log("entro a enviar")
    if (this.registerForm.valid) {
      this.regi_usu.create(this.registerForm.value).subscribe(usu=> {
        if(usu){
          Swal.fire(`Bienvenid@ `, 'Registrado Correctamente', 'success');
          this.rutas.navigate(["/login"]);
        }else{
          Swal.fire(`ERRROR`, 'Error al registrarse', 'error');
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
  
   //volver al login
   volverAlLogin(): void {
    this.rutas.navigate(['/login']);
  }
  ngOnInit(): void {
    
  }
}
