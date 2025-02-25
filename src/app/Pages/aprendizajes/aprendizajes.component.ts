import { Component, OnInit } from '@angular/core';
import { RegistrarAprService } from '../../Services/registrar_aprendizajes/registrar-apr.service';
import { RegistrarCatService } from '../../Services/registrar_categoria/registrar-cat.service';
import { RegistrarNivService } from '../../Services/registrar_niveles/registrar-niv.service';
import { Aprendizaje } from '../../Services/registrar_aprendizajes/Aprendizaje';
import { Categoria } from '../../Services/registrar_categoria/Categoria';
import { Nivel } from '../../Services/registrar_niveles/Nivel';

@Component({
  selector: 'app-aprendizajes',
  standalone: false,
  templateUrl: './aprendizajes.component.html',
  styleUrls: ['./aprendizajes.component.css']
})
export class AprendizajesComponent implements OnInit {
  // Modelo para un nuevo aprendizaje
  nuevoAprendizaje: Aprendizaje = {
    nombre_aprendizaje: '',
    significado: '',
    imagen: undefined, // Imagen será un archivo
    nivel_id: 0,
    categoria_id: 0
  };

  // Listas de aprendizajes, categorías y niveles
  aprendizajes: Aprendizaje[] = [];
  categorias: Categoria[] = [];
  niveles: Nivel[] = [];
  
  // Mensajes de error y previsualización de la imagen
  errorMessage: string = '';
  previewUrl: any = null;
  selectedFile: File | null = null;

  // Constructor con servicios inyectados
  constructor(
    private registrarAprService: RegistrarAprService,
    private registrarCatService: RegistrarCatService,
    private registrarNivService: RegistrarNivService
  ) { }

  // Al inicializar el componente, cargamos los aprendizajes, categorías y niveles
  ngOnInit(): void {
    this.getAprendizajes();
    this.getCategorias();
    this.getNiveles();
  }

  // Método para seleccionar archivo (imagen)
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;  // Previsualizar la imagen
      };
  
      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile);  // Usamos readAsDataURL para previsualizar
      }
    }
  }

  // Crear el aprendizaje con FormData
  createAprendizaje(): void {
    if (!this.nuevoAprendizaje.nombre_aprendizaje || !this.nuevoAprendizaje.significado || !this.selectedFile) {
      this.errorMessage = 'Debe completar todos los campos y subir una imagen';
      return;
    }

    const formData = new FormData();
    formData.append('nombre_aprendizaje', this.nuevoAprendizaje.nombre_aprendizaje);
    formData.append('significado', this.nuevoAprendizaje.significado);

    // Enviar la imagen como archivo binario (MultipartFile)
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile); // Se envía como MultipartFile
    }

    // Llamada al servicio para crear el aprendizaje
    this.registrarAprService.create(formData).subscribe({
      next: (aprendizaje) => {
        this.aprendizajes.push(aprendizaje);
        this.nuevoAprendizaje = {
          nombre_aprendizaje: '',
          significado: '',
          imagen: undefined,
          nivel_id: 0,
          categoria_id: 0
        };
        this.previewUrl = null;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  // Obtener todos los aprendizajes
  getAprendizajes(): void {
    this.registrarAprService.getAprendizaje().subscribe({
      next: (aprendizajes) => {
        this.aprendizajes = aprendizajes.map(aprendizaje => {
          if (aprendizaje.imagen) {
            // La imagen ya está en formato base64 con el tipo MIME
            aprendizaje.imagenBase64; // Asumiendo que ya está en Base64
          }
          return aprendizaje;
        });
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
  
  // Obtener todas las categorías
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

  // Obtener todos los niveles
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

  // Eliminar un aprendizaje
  deleteAprendizaje(aprendizaje: Aprendizaje): void {
    if (aprendizaje.id_aprendizaje) {
      this.registrarAprService.delete(aprendizaje.id_aprendizaje).subscribe(() => {
        this.aprendizajes = this.aprendizajes.filter(a => a.id_aprendizaje !== aprendizaje.id_aprendizaje);
      });
    }
  }
}
