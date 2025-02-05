import { Component, OnInit } from '@angular/core';
import { RegistrarAprService } from '../../Services/registrar_aprendizajes/registrar-apr.service';
import { RegistrarCatService } from '../../Services/registrar_categoria/registrar-cat.service';
import { RegistrarNivService } from '../../Services/registrar_niveles/registrar-niv.service';

interface Aprendizaje {
  id_aprendizaje?: number;
  nombre_aprendizaje: string;
  significado: string;
  imagen: string; // Añadir coma aquí
  nivelId: number;
  categoriaId: number;
}

interface Nivel {
  id_nivel?: number;
  nombre_nivel: string;
  descripcion: string;
  aprendizajes: Aprendizaje[]; // Añadir coma aquí
}

interface Categoria {
  id_categoria?: number;
  nombre_categoria: string;
  descripcion: string;
  aprendizajes: Aprendizaje[]; // Añadir coma aquí
}

@Component({
  selector: 'app-aprendizajes',
  standalone: false,
  templateUrl: './aprendizajes.component.html',
  styleUrls: ['./aprendizajes.component.css']
})
export class AprendizajesComponent implements OnInit {

  nuevoAprendizaje: Aprendizaje = {
    nombre_aprendizaje: '',
    significado: '',
    imagen: '',
    nivelId: 0,
    categoriaId: 0,
  };

  aprendizajes: Aprendizaje[] = [];
  categorias: Categoria[] = [];
  niveles: Nivel[] = [];
  errorMessage: string = '';

  constructor(
    private registrarAprService: RegistrarAprService,
    private registrarCatService: RegistrarCatService,
    private registrarNivService: RegistrarNivService
  ) { }

  ngOnInit(): void {
    this.getAprendizajes();
    this.getCategorias();
    this.getNiveles();
  }

  createAprendizaje(): void {
    if (!this.nuevoAprendizaje.nombre_aprendizaje || !this.nuevoAprendizaje.significado) {
      this.errorMessage = 'Debe completar todos los campos';
      return;
    }

    const aprendizaje: Aprendizaje = {
      nombre_aprendizaje: this.nuevoAprendizaje.nombre_aprendizaje,
      significado: this.nuevoAprendizaje.significado,
      imagen: this.nuevoAprendizaje.imagen,
      nivelId: this.nuevoAprendizaje.nivelId,
      categoriaId: this.nuevoAprendizaje.categoriaId
    };

    this.registrarAprService.create(aprendizaje).subscribe((aprendizaje: Aprendizaje) => {
      this.aprendizajes.push(aprendizaje);
      this.nuevoAprendizaje = {
        nombre_aprendizaje: '',
        significado: '',
        imagen: '',
        nivelId: 0,
        categoriaId: 0
      };
    });
  }

  getAprendizajes(): void {
    this.registrarAprService.getAprendizaje().subscribe({
      next: (aprendizajes) => {
        this.aprendizajes = aprendizajes;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  getCategorias(): void {
    this.registrarCatService.getCategoria().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  getNiveles(): void {
    this.registrarNivService.getNiveles().subscribe({
      next: (niveles) => {
        this.niveles = niveles;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  deleteAprendizaje(aprendizaje: Aprendizaje): void {
    if (aprendizaje.id_aprendizaje) {
      this.registrarAprService.delete(aprendizaje.id_aprendizaje).subscribe(() => {
        this.aprendizajes = this.aprendizajes.filter(a => a.id_aprendizaje !== aprendizaje.id_aprendizaje);
      });
    }
  }
}
