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
  traduccion: { imagen: string, nombre: string }[] = [];

  constructor(private router: Router) {}

  buscar() {
    this.traduccion = [];

    if (this.texto.trim() === '') {
      return;
    }

    const letras = this.texto.toLowerCase().split('');
    this.traduccion = letras
      .map(letra => this.abecedario.find(item => item.nombre.toLowerCase() === letra) || null)
      .filter(item => item !== null) as { imagen: string, nombre: string }[];
  }

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
  { imagen: 'z.png', nombre: 'Z' },
  { imagen: 'espacio.png', nombre: ' ' }
];


  volverANosotros(): void {
    this.router.navigate(['/nosotros']);
  }
}
