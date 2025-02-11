import { Injectable } from '@angular/core';
import { usuario_registro } from './usuario_registros';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../enviroment/appConfig';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuService {

  private urlBase = appConfig.baseUrl;
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(private http: HttpClient) {}

    //Crear usuarios
    create(registra_usu: usuario_registro): Observable<usuario_registro> {
      console.log(registra_usu)
      return this.http.post<usuario_registro>(`${this.urlBase}/usuario`, registra_usu, { headers: this.httpHeaders })
    }

  
    // Obtener todos los usuarios
    getUsuario(): Observable<usuario_registro[]> {
      return this.http.get<usuario_registro[]>(`${this.urlBase}/usuario`);
      
    }
  
    // Obtener usuario por ID
    getUsuariobyId(id: any): Observable<usuario_registro> {
      return this.http.get<usuario_registro>(`${this.urlBase}/usuario/${id}`).pipe(
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
    updateUsuario(usuario_registro: usuario_registro): Observable<usuario_registro> {
      const url = `${this.urlBase}/usuario/${usuario_registro.id}`;
      return this.http.put<usuario_registro>(url, usuario_registro, {
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
