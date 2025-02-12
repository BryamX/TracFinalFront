import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  standalone: false,
  
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

  constructor(private router: Router) {}

  titulo: string = 'Selecciona una categoría';
  elementos: { imagen: string, nombre: string }[] = [];

  // Datos de ejemplo (asegúrate de colocar imágenes reales en "assets")
  abecedario = [
    { imagen: 'a.png', nombre: 'A' },
    { imagen: 'b.png', nombre: 'B' },
    { imagen: 'c.png', nombre: 'C' },
    { imagen: 'ch.png', nombre: 'CH' },
    { imagen: 'd.png', nombre: 'D' },
    { imagen: 'e.png', nombre: 'E' },
    { imagen: 'f.png', nombre: 'F' },
    { imagen: 'g.png', nombre: 'G' },
    { imagen: 'h.png', nombre: 'H' },
    { imagen: 'i.png', nombre: 'I' },
    { imagen: 'j.png', nombre: 'J' },
    { imagen: 'k.png', nombre: 'K' },
    { imagen: 'l.png', nombre: 'L' },
    { imagen: 'll.png', nombre: 'LL' },
    { imagen: 'm.png', nombre: 'M' },
    { imagen: 'n.png', nombre: 'N' },
    { imagen: 'ñ.png', nombre: 'Ñ' },
    { imagen: 'o.png', nombre: 'O' },
    { imagen: 'p.png', nombre: 'P' },
    { imagen: 'q.png', nombre: 'Q' },
    { imagen: 'r.png', nombre: 'R' },
    { imagen: 's.png', nombre: 'S' },
    { imagen: 't.png', nombre: 'T' },
    { imagen: 'u.png', nombre: 'U' },
    { imagen: 'v.png', nombre: 'V' },
    { imagen: 'w.png', nombre: 'W' },
    { imagen: 'x.png', nombre: 'X' },
    { imagen: 'y.png', nombre: 'Y' },
    { imagen: 'z.png', nombre: 'Z' }
  ];

  vocales = [
    { imagen: 'a.png', nombre: 'A' },
    { imagen: 'e.png', nombre: 'E' },
    { imagen: 'i.png', nombre: 'I' },
    { imagen: 'o.png', nombre: 'O' },
    { imagen: 'u.png', nombre: 'U' }
  ];

  numeros = [
    { imagen: 'assets/señas/1.png', nombre: '1' },
    { imagen: 'assets/señas/2.png', nombre: '2' },
    { imagen: 'assets/señas/3.png', nombre: '3' },
    { imagen: 'assets/señas/2.png', nombre: '4' },
    { imagen: 'assets/señas/2.png', nombre: '5' },
    { imagen: 'assets/señas/2.png', nombre: '6' },
    { imagen: 'assets/señas/2.png', nombre: '7' },
    { imagen: 'assets/señas/2.png', nombre: '8' },
    { imagen: 'assets/señas/2.png', nombre: '9' }
  ];

  colores = [
    { imagen: 'assets/señas/2.png', nombre: 'Amarillo🟡' },
    { imagen: 'assets/señas/2.png', nombre: 'Azul🟦' },
    { imagen: 'assets/señas/2.png', nombre: 'Rojo🔺' }
  ];

  objetos = [
    { imagen: 'assets/señas/2.png', nombre: 'Motocicleta🏍️' },
    { imagen: 'assets/señas/2.png', nombre: 'Casa🏡' },
    { imagen: 'assets/señas/2.png', nombre: 'Balon⚽' },
    { imagen: 'assets/señas/2.png', nombre: 'Martillo🔨' },
    { imagen: 'assets/señas/2.png', nombre: 'Lapiz✏️' },
    { imagen: 'assets/señas/2.png', nombre: 'Mesa' }
    ];

    estaciones = [
    { imagen: 'assets/señas/2.png', nombre: 'Otoño🍂' },
    { imagen: 'assets/señas/2.png', nombre: 'Invierno🥶' },
    { imagen: 'assets/señas/2.png', nombre: 'Primavera🍁' },
    { imagen: 'assets/señas/2.png', nombre: 'Verano☀️' },
    ];

  seleccionarCategoria(categoria: string) {
    if (categoria === 'abecedario') {
      this.titulo = '🔤 Abecedario en Señas';
      this.elementos = this.abecedario;
    } else if (categoria === 'vocales') {
      this.titulo = '🅰 Vocales en Señas';
      this.elementos = this.vocales;
    } else if (categoria === 'numeros') {
      this.titulo = '🔢 Números en Señas';
      this.elementos = this.numeros;
    } else if (categoria === 'colores') {
      this.titulo = '🖍️ Colores en Señas';
      this.elementos = this.colores;
    } else if (categoria === 'objetos') {
      this.titulo = '🏍️ Objetos en Señas';
      this.elementos = this.objetos;
    } else if (categoria === 'estaciones') {
      this.titulo = '🌞 Estaciones del año en Señas';
      this.elementos = this.estaciones;
    }
  }

  ///////////regesar
  volverANosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
