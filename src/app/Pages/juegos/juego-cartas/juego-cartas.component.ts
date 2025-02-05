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
      imagen: 'https://images.vexels.com/media/users/3/164128/isolated/preview/278eb7fbb228da457dd63f539142964e-mano-dedo-b-letra-b-ilustracion.png', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'B',
      opciones: ['O', 'B', 'W']
    },
    {
      imagen: 'https://png.pngtree.com/png-clipart/20231025/original/pngtree-display-of-american-sign-language-letter-c-demonstrated-by-a-photo-png-image_13423866.png', // Otra carta con una imagen diferente
      respuestaCorrecta: 'C',
      opciones: ['R', '9', 'C']
    },
    {
      imagen: 'https://static.vecteezy.com/system/resources/previews/002/594/560/non_2x/sign-language-hand-gesture-indicating-d-letter-line-and-fill-icon-free-vector.jpg', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'D',
      opciones: ['1', 'D', 'L']
    },
    {
      imagen: 'https://as1.ftcdn.net/jpg/03/74/53/52/1000_F_374535201_bXlYXmaHzf00ju8h04vmsnnavqtLnjrF.jpg', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'E',
      opciones: ['E', 'H', 'Ñ']
    },
    {
      imagen: 'https://previews.123rf.com/images/khalide91/khalide911912/khalide91191200337/135101777-deletreo-con-los-dedos-del-alfabeto-en-lenguaje-de-se%C3%B1as-americano-asl-la-letra-f-vector.jpg', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'F',
      opciones: ['X', 'F', 'T']
    },
    {
      imagen: 'https://st.depositphotos.com/1029434/4867/v/450/depositphotos_48671279-stock-illustration-sign-language-and-the-alphabetthe.jpg', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'G',
      opciones: ['G', 'M', 'R']
    },
    {
      imagen: 'https://lh5.googleusercontent.com/proxy/WV8VHUCb_ofRnkExT2ydA0irJmJ4stoTc1Vl7oIqZ1-RwIcPU_9D53MyVK8KIdIB9VZy53R7uqbgpzjlCZJgu_aOG0HOl1cIuBs', // Cambia por la ruta correcta de la imagen
      respuestaCorrecta: 'CH',
      opciones: ['C', 'CH', 'RR']
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
      this.mensaje = '🎉 ¡Correcto! Volteando otra carta...';
      setTimeout(() => {
        this.nuevaRonda();
      }, 1500); // Espera 1.5 segundos antes de cambiar la carta
    } else {
      this.mensaje = '❌ Incorrecto, intenta de nuevo.';
    }
  }

  nuevaRonda() {
    this.cartaActual = this.obtenerNuevaCarta();
    this.cartaVolteada = false; // Permite volver a voltear una nueva carta
    this.mensaje = ''; // Limpia el mensaje
  }

}
