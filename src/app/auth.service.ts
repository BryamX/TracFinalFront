import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})/////GUARDAR INFORMACION PARA Q NO SE PIERDAN EN EL CAMBIO DE VENTANA EN ANGULAR
export class AuthService {

  isLogeado = false;
  id_persona: any;  

  
  constructor() { 
//MANEGAR ERRORE
    try {
      if (typeof localStorage !== 'undefined') {
        this.loadUserFromLocalStorage();
      } else {
        console.error('localStorage no está disponible en este entorno.');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
      throw new Error('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
    }

  }
//////CARGAR ELEMENTOS 
  loadUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
       this.id_persona=user.id_persona;
    }

/////////LIMPIAR LAS VARIABLES TIPO CACHE
  clearLocalStorage() {
    localStorage.removeItem('user');
       this.id_persona='';  
  }


login() {
  this.isLogeado = true;
  
  }




}

