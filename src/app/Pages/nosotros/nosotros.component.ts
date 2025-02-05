import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: false,
  
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  constructor(private router: Router) {}
/////usa la ruta
  irA(destino: string): void {
    this.router.navigate([`/${destino}`]);
  }
}
