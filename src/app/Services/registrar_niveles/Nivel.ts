import { Aprendizaje } from '../registrar_aprendizajes/Aprendizaje';

export class Nivel{
  id_nivel?: number;             // ID único de la categoría
  nombre_nivel: string;        // Nombre de la categoría
  descripcion: string ;            // Descripción de la categoría

  // Relaciones
  aprendizajes: Aprendizaje[]; // Lista de aprendizajes relacionados


  constructor(nombre_nivel: string, descripcion: string, aprendizajes: Aprendizaje[],id_nivel?: number,) {
    this.nombre_nivel = nombre_nivel;
    this.descripcion = descripcion;
    this.id_nivel = id_nivel;
    this.aprendizajes = aprendizajes;
    
  }
}