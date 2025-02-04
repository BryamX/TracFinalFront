import { Component, OnInit } from '@angular/core';
import { RegistrarNivService } from '../../Services/registrar_niveles/registrar-niv.service';
import { Aprendizaje } from '../../Services/registrar_aprendizajes/Aprendizaje';



interface Nivel{
  id_nivel?: number;             // ID único de la categoría
  nombre_nivel: string;        // Nombre de la categoría
  descripcion: string ;            // Descripción de la categoría

  // Relaciones
  aprendizajes: Aprendizaje[]; // Lista de aprendizajes relacionados


}
@Component({
  selector: 'app-niveles',
  standalone: false,

  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {
nuevoNivel:{
  nombre_nivel: string; descripcion: string; aprendizajes: Aprendizaje[];} ={
nombre_nivel:'',
descripcion:'',
aprendizajes: []
  };
 niveles: Nivel[] = []; // Array para almacenar los niveles
  errorMessage: string = ''; // Mensaje de error en caso de que ocurra algún problema

  constructor(private registrarNivService: RegistrarNivService) { }

  ngOnInit(): void {
    this.getNiveles(); // Obtener todos los niveles cuando se inicia el componente
  }

  // Método para crear un nuevo nivel
  createNivel(): void {
    if (!this.nuevoNivel.nombre_nivel || !this.nuevoNivel.descripcion) {
      this.errorMessage = 'Debe completar todos los campos'; // Verificación si los campos están vacíos
      return;
    }

    const nivel: Nivel = {
      nombre_nivel: this.nuevoNivel.nombre_nivel,
      descripcion: this.nuevoNivel.descripcion,
      aprendizajes: this.nuevoNivel.aprendizajes

    };

    this.registrarNivService.create(nivel).subscribe(( nivel: Nivel) =>{
      this.niveles.push(nivel);
    this.nuevoNivel = {
      nombre_nivel:'',
      descripcion: '',
      aprendizajes:[]
    };  
  });
 
  }

  // Método para obtener todos los niveles
  getNiveles(): void {
    this.registrarNivService.getNiveles().subscribe({
      next: (niveles) => {
        this.niveles = niveles; // Asignar los niveles obtenidos al array
      },
      error: (error) => {
        this.errorMessage = error.message; // Mostrar mensaje de error si ocurre alguno
      }
    });
  }

  // Método para eliminar un nivel
  deleteNivel(nivel: Nivel) {
    if (nivel.id_nivel) {
      this.registrarNivService.delete(nivel.id_nivel).subscribe(() => {
        this.niveles = this.niveles.filter(c => c.id_nivel !== nivel.id_nivel);
      });
  }
}

  // Método para actualizar un nivel
//   updateNivel(): void {
//     if (!this.nivel.nombre_nivel || !this.nivel.descripcion) {
//       this.errorMessage = 'Debe completar todos los campos para actualizar'; // Validación para actualizar
//       return;
//     }

//     this.registrarNivService.updateNivel(this.nivel).subscribe({
//       next: (nivelActualizado) => {
//         const index = this.niveles.findIndex(nivel => nivel.id_nivel === nivelActualizado.id_nivel);
//         if (index !== -1) {
//           this.niveles[index] = nivelActualizado; // Actualizar el nivel en la lista
//         }
//         this.nivel = new Nivel(); // Limpiar el formulario
//       },
//       error: (error) => {
//         this.errorMessage = error.message; // Mostrar mensaje de error si la actualización falla
//       }
//     });
//   }
}
