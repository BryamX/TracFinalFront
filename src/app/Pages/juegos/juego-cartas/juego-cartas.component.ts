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
      imagen: 'a.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'A',
      opciones: ['A', 'B', 'C']
    },
    {
      imagen: 'b.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'B',
      opciones: ['O', 'B', 'W']
    },
    {
      imagen: 'c.png', // Otra carta con una imagen diferente
      respuestaCorrecta: 'C',
      opciones: ['R', '9', 'C']
    },
    {
      imagen: 'ch.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'CH',
      opciones: ['C', 'CH', 'RR']
    },
    {
      imagen: 'd.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'D',
      opciones: ['1', 'D', 'L']
    },
    {
      imagen: 'e.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'E',
      opciones: ['E', 'H', 'Ñ']
    },
    {
      imagen: 'f.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'F',
      opciones: ['X', 'F', 'T']
    },
    {
      imagen: 'g.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'G',
      opciones: ['G', 'M', 'R']
    },
    {
      imagen: 'h.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'H',
      opciones: ['H', 'CH', 'P']
    },
    {
      imagen: 'i.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'I',
      opciones: ['Z', 'L', 'I']
    },
    {
      imagen: 'j.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'J',
      opciones: ['J', 'M', 'Q']
    },
    {
      imagen: 'k.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'K',
      opciones: ['K', 'O', 'B']
    },
    {
      imagen: 'l.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'L',
      opciones: ['7', 'S', 'L']
    },
    {
      imagen: 'm.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'M',
      opciones: ['8', 'M', 'Y']
    },
    {
      imagen: 'n.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'N',
      opciones: ['4', 'Z', 'N']
    },
    {
      imagen: 'ñ.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'Ñ',
      opciones: ['Ñ', 'T', 'S']
    },
    {
      imagen: 'o.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'O',
      opciones: ['E', 'W', 'O']
    },
    {
      imagen: 'p.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'P',
      opciones: ['5', '2', 'P']
    },
    {
      imagen: 'q.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'Q',
      opciones: ['Q', 'J', 'U']
    },
    {
      imagen: 'r.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'R',
      opciones: ['R', 'K', 'O']
    },
    {
      imagen: 'rr.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'RR',
      opciones: ['RR', 'E', 'G']
    },
    {
      imagen: 's.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'S',
      opciones: ['V', 'S', 'H']
    },
    {
      imagen: 't.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'T',
      opciones: ['X', 'T', 'U']
    },
    {
      imagen: 'u.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'U',
      opciones: ['R', '3', 'U']
    },
    {
      imagen: 'v.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'V',
      opciones: ['W', 'B', 'V']
    },
    {
      imagen: 'w.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'W',
      opciones: ['A', 'Y', 'W']
    },
    {
      imagen: 'x.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'X',
      opciones: ['D', 'J', 'X']
    },
    {
      imagen: 'y.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'Y',
      opciones: ['Y', '6', 'P']
    },
    {
      imagen: 'z.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'Z',
      opciones: ['Z', 'Ñ', 'Q']
    }
  ];


  cartaActual = this.obtenerNuevaCarta();

  obtenerNuevaCarta() {
    return this.cartas[Math.floor(Math.random() * this.cartas.length)];
  }

  voltearCarta() {
    this.cartaVolteada = true;
    this.mensaje = ''; // Resetea el mensaje anterior
  }

  seleccionarOpcion(opcion: string) {
    if (opcion === this.cartaActual.respuestaCorrecta) {
      this.mensaje = '🎉 ¡Correcto! Volteando otra carta...🤖';
      setTimeout(() => {
        this.nuevaRonda();
      }, 1500); // Espera 1.5 segundos antes de cambiar la carta
    } else {
      this.mensaje = '😝 Incorrecto, intenta de nuevo. 🫣';
    }
  }

  nuevaRonda() {
    this.cartaActual = this.obtenerNuevaCarta();
    this.cartaVolteada = false; // Permite volver a voltear una nueva carta
    this.mensaje = ''; // Limpia el mensaje
  }

}
