import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre-del-proyecto';

  constructor(private authService: AuthService, private router: Router) {
    try {
      if (typeof localStorage !== 'undefined') {
        this.authService.loadUserFromLocalStorage();
      }
    } catch (error) {
      console.error('Ocurrió un error inesperado:', error);
    }
  }

  // Esta función oculta el menú y el footer cuando estamos en la página de login
  mostrarMenu(): boolean {
    return this.router.url !== '/login';
  }
}
