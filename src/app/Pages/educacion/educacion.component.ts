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

  // Datos
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
    { imagen: 'amarillo.png', nombre: 'Amarillo🟡' },
    { imagen: 'azul.png', nombre: 'Azul🟦' },
    { imagen: 'rojo.png', nombre: 'Rojo🔺' },
    { imagen: 'naranja.png', nombre: 'Naranja🟧' },
    { imagen: 'blanco.png', nombre: 'Blanco🐻‍❄️' },
    { imagen: 'brillante.png', nombre: 'Brillante✨' },
    { imagen: 'cafe.png', nombre: 'Cafe🍪' },
    { imagen: 'gris.png', nombre: 'Gris🩶' },
    { imagen: 'morado.png', nombre: 'Morado🟣' },
    { imagen: 'negro.png', nombre: 'Negro◼️' },
    { imagen: 'oro.png', nombre: 'Dorado🥇' },
    { imagen: 'rosa.png', nombre: 'Rosado🩷' },
    { imagen: 'verde.png', nombre: 'Verde🌿' }
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
    { imagen: 'assets/señas/2.png', nombre: 'Verano☀️' }
    ];


    dias = [
      { imagen: 'lunes.png', nombre: 'Lunes 1' },
      { imagen: 'martes.png', nombre: 'Martes 2' },
      { imagen: 'miercoles.png', nombre: 'Miercoles 3' },
      { imagen: 'jueves.png', nombre: 'Jueves 4' },
      { imagen: 'viernes.png', nombre: 'Viernes 5' },
      { imagen: 'sabado.png', nombre: 'Sabedo 6' },
      { imagen: 'domingo.png', nombre: 'Domingo 7' }
      ];

      animales = [
        { imagen: 'cerdo.png', nombre: 'Cerdo🐷' },
        { imagen: 'chango.png', nombre: 'Mono🐒' },
        { imagen: 'elefante.png', nombre: 'Elefante🐘' },
        { imagen: 'gallo.png', nombre: 'Gallo🐓' },
        { imagen: 'jirafa.png', nombre: 'Jirafa🦒' },
        { imagen: 'oso.png', nombre: 'Oso🐻' },
        { imagen: 'perro.png', nombre: 'Perro🐶' },
        { imagen: 'pez.png', nombre: 'Pez🐠' }
        
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
    } else if (categoria === 'dias') {
      this.titulo = '🌤️ Dias de la semana';
      this.elementos = this.dias;
    } else if (categoria === 'animales') {
      this.titulo = '🫎 Animales 🦁';
      this.elementos = this.animales;
    }
  }

  ///////////regesar
  volverANosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
