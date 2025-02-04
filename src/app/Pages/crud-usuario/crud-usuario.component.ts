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
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      discapacidad: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      carnet_discapacidad: [false, Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],

    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {//envaras datos al back
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
      // v.base                                        v.front
      this.usuario.usuario= this.registerForm.value.usuario;
      this.usuario.pasword= this.registerForm.value.clave;
      this.usuario.nombre= this.registerForm.value.nombre;
      this.usuario.edad= this.registerForm.value.edad;
      this.usuario.porcentaje_de_discapacidad= this.registerForm.value.discapacidad;

 // Verifica que carnet_discapacidad tiene un valor booleano
 console.log('Carnet de discapacidad:', this.registerForm.value.carnet_discapacidad); 

// Aquí carnet_discapacidad será un valor booleano automáticamente gracias a los radio buttons
this.usuario.carnet_discapacidad = this.registerForm.value.carnet_discapacidad;

      this.usuario.telefono= this.registerForm.value.telefono;
      this.usuario.correo= this.registerForm.value.correo;
      
      
      this.regi_usu.create(this.usuario).subscribe(usu=> {
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
}
