export class Aprendizaje {
    id_aprendizaje?: number;              // ID único del aprendizaje
    nombre_aprendizaje: string = '';         // Nombre del aprendizaje
    significado: string = '';               // Significado del aprendizaje
    imagen: string = '';                    // URL o base64 de la imagen relacionada
  
    // Relaciones
    nivelId: number = 0;                    // ID del nivel relacionado
    categoriaId: number = 0;                // ID de la categoría relacionada
  }
  