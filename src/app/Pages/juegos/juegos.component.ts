import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  standalone: false,
  
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  juegoSeleccionado: number | null = null;

  jugar(juego: number) {
    this.juegoSeleccionado = juego;
  }
}
