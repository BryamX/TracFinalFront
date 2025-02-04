import { Injectable } from '@angular/core';
import { appConfig } from '../enviroment/appConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = appConfig.baseUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlBase}/usuario`);
    
  }

  // Obtener usuario por ID
  getUsuariobyId(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlBase}/usuario/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar usuario
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/usuario/${id}`, {
      headers: this.httpHeaders,
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar usuario
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlBase}/usuario/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario, {
      headers: this.httpHeaders,
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError(() => new Error('Error en la solicitud. Intenta nuevamente más tarde.'));
  }
}
