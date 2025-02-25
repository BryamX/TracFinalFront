import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../Services/registrar_categoria/Categoria';
import { Aprendizaje } from '../../Services/registrar_aprendizajes/Aprendizaje';
import { RegistrarCatService } from '../../Services/registrar_categoria/registrar-cat.service';
import { RegistrarAprService } from '../../Services/registrar_aprendizajes/registrar-apr.service';


@Component({
  selector: 'app-ca',
  standalone: false,
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CaComponent implements OnInit {
  categorias: Categoria[] = [];
  aprendizajes: Aprendizaje[] = [];
  selectedCategoria: Categoria | null = null;
  nuevoCategoria: Categoria = { id_categoria: 0, nombre_categoria: '', descripcion: '', aprendizajes: [] };
  errorMessage: string = '';
  isLoading: boolean = false;
  categoriaForm: FormGroup;

  constructor(
    private registrarCatService: RegistrarCatService,
    private registrarAprService: RegistrarAprService,
    private fb: FormBuilder
  ) {
    this.categoriaForm = this.fb.group({
      nombre_categoria: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategoria();
    this.getAprendizajes();
  }

  getCategoria(): void {
    this.registrarCatService.getCategoria().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error) => {
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

  onSelectCategoria(categoria: Categoria | null): void {
    if (!categoria || this.selectedCategoria === categoria) {
      this.selectedCategoria = null;
      this.nuevoCategoria = { id_categoria: 0, nombre_categoria: '', descripcion: '', aprendizajes: [] };
    } else {
      this.selectedCategoria = categoria;
      this.categoriaForm.patchValue({
        nombre_categoria: categoria.nombre_categoria,
        descripcion: categoria.descripcion
      });
      this.nuevoCategoria = Object.assign({}, categoria);
    }
  }

  onSelectAprendizaje(aprendizaje: Aprendizaje): void {
    if (!aprendizaje?.id_aprendizaje) return;
    if (!this.nuevoCategoria.aprendizajes) {
      this.nuevoCategoria.aprendizajes = [];
    }
    const existe = this.nuevoCategoria.aprendizajes.some(a => a.id_aprendizaje === aprendizaje.id_aprendizaje);
    if (!existe) {
      this.nuevoCategoria.aprendizajes.push(aprendizaje);
    } else {
      alert('El aprendizaje ya ha sido agregado.');
    }
  }


  updateCategoria(): void {
    if (!this.categoriaForm.valid) {
      this.errorMessage = 'Debe completar todos los campos para actualizar';
      alert(this.errorMessage);
      return;
    }
    if (!this.nuevoCategoria.id_categoria) {
      alert('Seleccione una categoría antes de actualizar.');
      return;
    }
    this.nuevoCategoria.nombre_categoria = this.categoriaForm.get('nombre_categoria')?.value;
    this.nuevoCategoria.descripcion = this.categoriaForm.get('descripcion')?.value;
    this.nuevoCategoria.aprendizajes = this.nuevoCategoria.aprendizajes || [];
    this.isLoading = true;

    this.registrarCatService.updateCategoria(this.nuevoCategoria).subscribe({
      next: (categoriaActualizado: Categoria) => {
        const index = this.categorias.findIndex(categoria => categoria.id_categoria === categoriaActualizado.id_categoria);
        if (index !== -1) {
          this.categorias[index] = categoriaActualizado;
          this.selectedCategoria = categoriaActualizado;
          this.categoriaForm.patchValue({
            nombre_categoria: categoriaActualizado.nombre_categoria,
            descripcion: categoriaActualizado.descripcion,
          });
        }
        alert('Categoría actualizada correctamente');
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = error.message;
        this.isLoading = false;
        alert('Error al actualizar la categoría: ' + this.errorMessage);
      }
    });
  }

  removeAprendizaje(aprendizaje: Aprendizaje) {
    this.nuevoCategoria.aprendizajes = this.nuevoCategoria.aprendizajes.filter(a => a.id_aprendizaje !== aprendizaje.id_aprendizaje);
    console.log('Aprendizajes después de eliminar:', this.nuevoCategoria.aprendizajes);
  }
}

 

