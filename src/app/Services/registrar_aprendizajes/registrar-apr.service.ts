import { Injectable } from '@angular/core';
import { Aprendizaje } from './Aprendizaje';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../enviroment/appConfig';

@Injectable({
  providedIn: 'root'
})
export class RegistrarAprService {
  private urlBase = appConfig.baseUrl;

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(private http: HttpClient) {}

    //Crear Aprendizajes
    create(Aprendizaje: Aprendizaje): Observable<Aprendizaje> {
      return this.http.post<Aprendizaje>(`${this.urlBase}/Aprendizaje`, Aprendizaje, { 
        headers: new HttpHeaders ({
          'Content-Type': 'application/json'

        })})
    }

  
    // Obtener todos los Aprendizajes
    getAprendizaje(): Observable<Aprendizaje[]> {
      return this.http.get<Aprendizaje[]>(`${this.urlBase}/Aprendizaje`);
      
    }
  
    // Obtener Aprendizaje por ID
    getAprendizajebyId(id: any): Observable<Aprendizaje> {
      return this.http.get<Aprendizaje>(`${this.urlBase}/Aprendizaje/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  
    // Eliminar Aprendizaje
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.urlBase}/Aprendizaje/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  
    // Actualizar Aprendizaje
    updateAprendizaje(Aprendizaje: Aprendizaje): Observable<Aprendizaje> {
      const url = `${this.urlBase}/Aprendizaje/${Aprendizaje.id_aprendizaje}`;
      return this.http.put<Aprendizaje>(url, Aprendizaje, {
        headers: new HttpHeaders,
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
