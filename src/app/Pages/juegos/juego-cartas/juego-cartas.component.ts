import { Component } from '@angular/core';

@Component({
  selector: 'app-juego-cartas',
  standalone: false,
  
  templateUrl: './juego-cartas.component.html',
  styleUrl: './juego-cartas.component.css'
})
export class JuegoCartasComponent {

  cartaVolteada = false;
  mensaje = '';

  cartas = [
    {
      imagen: 'https://static.vecteezy.com/system/resources/previews/002/594/555/non_2x/sign-language-hand-gesture-indicating-a-letter-line-and-fill-icon-free-vector.jpg', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'A',
      opciones: ['A', 'B', 'C']
    },
    {
      imagen: 'assets/carta2.png', // Otra carta con una imagen diferente
      respuestaCorrecta: 'Sol',
      opciones: ['Luna', 'Estrella', 'Sol']
    }
  ];

  cartaActual = this.cartas[Math.floor(Math.random() * this.cartas.length)];

  voltearCarta() {
    this.cartaVolteada = true;
  }

  seleccionarOpcion(opcion: string) {
    if (opcion === this.cartaActual.respuestaCorrecta) {
      this.mensaje = '🎉 ¡Correcto!';
    } else {
      this.mensaje = '❌ Incorrecto, intenta de nuevo.';
    }
  }
}
