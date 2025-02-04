import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas',
  standalone: false,
  
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    // Mostrar el modal al cargar el componente
    setTimeout(() => {
      this.showModal();
    }, 1000);  // Espera 1 segundo antes de mostrar el modal
  }

  // Función para mostrar el modal
  showModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.add('show');
    }
  }

  // Función para cerrar el modal
  closeModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('show');
    }
  }
}
