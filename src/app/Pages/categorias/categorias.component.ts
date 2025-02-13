import { Component, OnInit } from '@angular/core';
import { Aprendizaje } from '../../Services/registrar_aprendizajes/Aprendizaje';
import { RegistrarCatService } from '../../Services/registrar_categoria/registrar-cat.service';



interface Categoria{
  id_categoria?: number;             // ID único de la categoría
  nombre_categoria: string;        // Nombre de la categoría
  descripcion: string ;            // Descripción de la categoría

  // Relaciones
  aprendizajes: Aprendizaje[]; // Lista de aprendizajes relacionado
}

@Component({
  selector: 'app-categorias',
  standalone: false,

  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
nuevoCategoria:{
  id_categoria: number, nombre_categoria: string; descripcion: string; aprendizajes: Aprendizaje[];} ={
id_categoria: 0,
    nombre_categoria:'',
descripcion:'',
aprendizajes: []
  };
 categorias: Categoria[] = []; // Array para almacenar los Categorias
  errorMessage: string = ''; // Mensaje de error en caso de que ocurra algún problema

  constructor(private registrarCatService: RegistrarCatService) { }

  ngOnInit(): void {
    this.getCategoria(); // Obtener todos los Categorias cuando se inicia el componente
  }

  // Método para crear un nuevo Categoria
  createCategoria(): void {
    if (!this.nuevoCategoria.nombre_categoria || !this.nuevoCategoria.descripcion) {
      this.errorMessage = 'Debe completar todos los campos'; // Verificación si los campos están vacíos
      return;
    }

    const categoria: Categoria = {
      nombre_categoria: this.nuevoCategoria.nombre_categoria,
      descripcion: this.nuevoCategoria.descripcion,
      aprendizajes: this.nuevoCategoria.aprendizajes

    };

    this.registrarCatService.create(categoria).subscribe(( categoria: Categoria) =>{
      this.categorias.push(categoria);
    this.nuevoCategoria = {
      id_categoria:0,
      nombre_categoria:'',
      descripcion: '',
      aprendizajes:[]
    };  
  });
 
  }

  // Método para obtener todos los Categorias
  getCategoria(): void {
    this.registrarCatService.getCategoria().subscribe({
      next: (categorias) => {
        this.categorias = categorias; // Asignar los Categorias obtenidos al array
      },
      error: (error: any) => {
        this.errorMessage = error.message; // Mostrar mensaje de error si ocurre alguno
      }
    });
  }

  // Método para eliminar un Categoria
  deleteCategoria(categoria: Categoria) {
    if (categoria.id_categoria) {
      this.registrarCatService.delete(categoria.id_categoria).subscribe(() => {
        this.categorias = this.categorias.filter(c => c.id_categoria !== categoria.id_categoria);
      });
    }
  }

  // Método para actualizar un Categoria
  updateCategoria(): void {
    if (!this.nuevoCategoria.nombre_categoria || !this.nuevoCategoria.descripcion) {
      this.errorMessage = 'Debe completar todos los campos para actualizar'; // Validación para actualizar
      return;
    }

    if (this.nuevoCategoria.id_categoria) {
      this.registrarCatService.updateCategoria(this.nuevoCategoria).subscribe({
        next: (categoriaActualizado: Categoria) => {
          const index = this.categorias.findIndex(categoria => categoria.id_categoria === categoriaActualizado.id_categoria);
          if (index !== -1) {
            this.categorias[index] = categoriaActualizado; // Actualizar el Categoria en la lista
          }
          this.nuevoCategoria = {
            id_categoria:0,
            nombre_categoria: '',
            descripcion: '',
            aprendizajes: []
          }; // Limpiar el formulario
        },
        error: (error: any) => {
          this.errorMessage = error.message; // Mostrar mensaje de error si la actualización falla
        }
      });
    }
  }
}
