import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarCatService } from '../../Services/registrar_categoria/registrar-cat.service';
import { RegistrarAprService } from '../../Services/registrar_aprendizajes/registrar-apr.service';
import { Aprendizaje } from '../../Services/registrar_aprendizajes/Aprendizaje';
import { ChangeDetectorRef } from '@angular/core';

interface Categoria {
  id_categoria?: number;
  nombre_categoria: string;
  descripcion: string;
  aprendizajes: Aprendizaje[];
}

@Component({
  selector: 'app-ca',
  standalone: false,
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CaComponent implements OnInit {
  nuevoCategoria: {
    id_categoria: number;
    nombre_categoria: string;
    descripcion: string;
    aprendizajes: Aprendizaje[];
  } = {
    id_categoria: 0,
    nombre_categoria: '',
    descripcion: '',
    aprendizajes: []
  };

  aprendizajes: Aprendizaje[] = [];
  categorias: Categoria[] = [];
  selectedCategoria: any = null;
  categoriaForm: FormGroup;
  nuevoAprendizaje: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private registrarAprService: RegistrarAprService,
    private registrarCatService: RegistrarCatService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.categoriaForm = this.fb.group({
      nombre_categoria: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getCategoria();
    this.getAprendizajes();
  }

  getCategoria(): void {
    this.registrarCatService.getCategoria().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error: any) => {
        this.errorMessage = error.message;
        alert('Error al obtener las categorías: ' + this.errorMessage);
      }
    });
  }

  getAprendizajes(): void {
    this.registrarAprService.getAprendizaje().subscribe({
      next: (aprendizajes) => {
        this.aprendizajes = aprendizajes;
      },
      error: (error) => {
        this.errorMessage = error.message;
        alert('Error al obtener los aprendizajes: ' + this.errorMessage);
      }
    });
  }

  updateCategoria(): void {
    if (!this.categoriaForm.valid) {
      this.errorMessage = 'Debe completar todos los campos para actualizar';
      alert(this.errorMessage);
      return;
    }

    // Asigna los valores del formulario a `nuevoCategoria`
    this.nuevoCategoria.nombre_categoria = this.categoriaForm.get('nombre_categoria')?.value;
    this.nuevoCategoria.descripcion = this.categoriaForm.get('descripcion')?.value;

    this.isLoading = true;
    if (this.nuevoCategoria.id_categoria) {
      console.log('Datos enviados para actualizar:', this.nuevoCategoria);
      this.registrarCatService.updateCategoria(this.nuevoCategoria).subscribe({
        next: (categoriaActualizado: Categoria) => {
          const index = this.categorias.findIndex(categoria => categoria.id_categoria === categoriaActualizado.id_categoria);
          if (index !== -1) {
            this.categorias[index] = categoriaActualizado;
            this.cd.detectChanges();
          }
          this.nuevoCategoria = {
            id_categoria: 0,
            nombre_categoria: '',
            descripcion: '',
            aprendizajes: []
          };
          this.isLoading = false;
          alert('Categoría actualizada correctamente');
          console.log('Categoría actualizada:', categoriaActualizado);
        },
        error: (error: any) => {
          this.errorMessage = error.message;
          this.isLoading = false;
          alert('Error al actualizar la categoría: ' + this.errorMessage);
          console.error('Error al actualizar la categoría:', error);
        }
      });
    }
  }

  onSelectCategoria(categoria: any) {
    this.selectedCategoria = categoria;
    this.nuevoCategoria = { ...categoria };
    this.categoriaForm.patchValue({
      nombre_categoria: categoria.nombre_categoria,
      descripcion: categoria.descripcion
    });
  }

  onSelectAprendizaje(aprendizaje: Aprendizaje) {
    if (!this.nuevoCategoria.aprendizajes.some(a => a.id_aprendizaje === aprendizaje.id_aprendizaje)) {
      this.nuevoCategoria.aprendizajes.push(aprendizaje);
    }
  }

  removeAprendizaje(aprendizaje: Aprendizaje) {
    this.nuevoCategoria.aprendizajes = this.nuevoCategoria.aprendizajes.filter(a => a.id_aprendizaje !== aprendizaje.id_aprendizaje);
  }
}
