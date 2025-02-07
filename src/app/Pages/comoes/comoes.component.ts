import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comoes',
  standalone: false,
  
  templateUrl: './comoes.component.html',
  styleUrl: './comoes.component.css'
})
export class ComoesComponent {

  texto: string = '';
  traduccion: string[] = [];

  constructor(private router: Router) {}

  buscar() {
    this.traduccion = [];

    if (this.texto.trim() === '') {
      return;
    }

    const letras = this.texto.toLowerCase().split('');
    this.traduccion = letras.filter(letra => letra.match(/[a-zñ]/)); // Solo letras
  }

  volverANosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
