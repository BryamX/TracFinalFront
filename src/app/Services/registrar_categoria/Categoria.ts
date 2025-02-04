import { Aprendizaje } from '../registrar_aprendizajes/Aprendizaje';

export class Categoria {
  id_categoria?: number;             // ID único de la categoría
  nombre_categoria: string;        // Nombre de la categoría
  descripcion: string ;            // Descripción de la categoría

  aprendizajes: Aprendizaje[]; // Lista de aprendizajes relacionados


  constructor(nombre_categoria: string, descripcion: string, aprendizajes: Aprendizaje[],id_categoria?: number,) {
    this.nombre_categoria = nombre_categoria;
    this.descripcion = descripcion;
    this.id_categoria = id_categoria;
    this.aprendizajes = aprendizajes;
    
  }
}
