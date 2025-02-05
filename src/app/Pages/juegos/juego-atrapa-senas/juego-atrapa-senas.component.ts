import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-juego-atrapa-senas',
  standalone: false,
  
  templateUrl: './juego-atrapa-senas.component.html',
  styleUrl: './juego-atrapa-senas.component.css'
})
export class JuegoAtrapaSenasComponent {

  senas: any[] = [];
  posicionCanasta = 150; // Posición inicial de la canasta
  velocidadCaida = 3; // Velocidad de caída de las señas
  puntos = 0;
  categoria = "Letras"; // Se puede cambiar a "Números" o "Palabras"

  senasCorrectas = [
    { imagen: 'assets/sena-a.png', respuesta: 'A' },
    { imagen: 'assets/sena-b.png', respuesta: 'B' },
    { imagen: 'assets/sena-c.png', respuesta: 'C' }
  ];

  senasIncorrectas = [
    { imagen: 'assets/sena-x.png', respuesta: 'X' },
    { imagen: 'assets/sena-y.png', respuesta: 'Y' },
    { imagen: 'assets/sena-z.png', respuesta: 'Z' }
  ];

  intervaloJuego: any;

  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.puntos = 0;
    this.senas = [];
    clearInterval(this.intervaloJuego);
    
    this.intervaloJuego = setInterval(() => {
      if (Math.random() < 0.5) {
        this.generarSena();
      }
      this.moverSenas();
    }, 600);
  }

  generarSena() {
    const esCorrecta = Math.random() < 0.5;
    const sena = esCorrecta
      ? this.senasCorrectas[Math.floor(Math.random() * this.senasCorrectas.length)]
      : this.senasIncorrectas[Math.floor(Math.random() * this.senasIncorrectas.length)];

    this.senas.push({ ...sena, x: Math.random() * 280, y: 0, correcta: esCorrecta });
  }

  moverSenas() {
    this.senas.forEach((sena, index) => {
      sena.y += this.velocidadCaida;

      // Si toca la canasta
      if (sena.y >= 250 && sena.x >= this.posicionCanasta - 30 && sena.x <= this.posicionCanasta + 50) {
        if (sena.correcta) {
          this.puntos += 10;
        } else {
          this.puntos -= 5;
        }
        this.senas.splice(index, 1);
      }

      // Si llega al suelo, desaparece
      if (sena.y > 300) {
        this.senas.splice(index, 1);
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  moverCanasta(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this.posicionCanasta > 10) {
      this.posicionCanasta -= 20;
    } else if (event.key === 'ArrowRight' && this.posicionCanasta < 290) {
      this.posicionCanasta += 20;
    }
  }
}
