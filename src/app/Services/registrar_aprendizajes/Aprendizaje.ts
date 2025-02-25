export class Aprendizaje {
  id_aprendizaje?: number;
  nombre_aprendizaje: string = '';
  significado: string = '';
  imagen?: ArrayBuffer; // La imagen ahora será un ArrayBuffer (bytes)

  imagenBase64?: string; // La imagen en formato Base64
  nivel_id: number = 0;
  categoria_id: number = 0;
}

