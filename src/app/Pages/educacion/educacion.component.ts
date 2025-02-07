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
    { imagen: 'assets/señas/a.png', nombre: 'A' },
    { imagen: 'assets/señas/b.png', nombre: 'B' },
    { imagen: 'assets/señas/c.png', nombre: 'C' }
  ];

  vocales = [
    { imagen: 'assets/señas/a.png', nombre: 'A' },
    { imagen: 'assets/señas/e.png', nombre: 'E' },
    { imagen: 'assets/señas/i.png', nombre: 'I' }
  ];

  numeros = [
    { imagen: 'assets/señas/1.png', nombre: '1' },
    { imagen: 'assets/señas/2.png', nombre: '2' },
    { imagen: 'assets/señas/3.png', nombre: '3' }
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
    }
  }

  ///////////regesar
  volverANosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
