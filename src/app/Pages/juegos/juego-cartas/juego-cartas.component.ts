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
      imagen: 'assets/carta1.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'Manzana',
      opciones: ['Manzana', 'Pera', 'Banana']
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
