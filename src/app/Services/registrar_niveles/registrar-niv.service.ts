import { Injectable } from '@angular/core';
import { Nivel } from './Nivel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { appConfig } from '../../enviroment/appConfig';

@Injectable({
  providedIn: 'root'
})
export class RegistrarNivService {

  private urlBase = appConfig.baseUrl;

  constructor(private http: HttpClient) {  }

  // Crear nivel
  create(nivel: Nivel): Observable<Nivel> {
    return this.http.post<Nivel>(`${this.urlBase}/Nivel`, nivel, { headers: new HttpHeaders ({
      'Content-Type': 'application/json'

    })})
  }

  // Obtener todos los niveles
  getNiveles(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(`${this.urlBase}/Nivel`)
      .pipe(catchError(this.handleError));
  }

  // Obtener nivel por ID
  getNivelById(id: number): Observable<Nivel> {
    return this.http.get<Nivel>(`${this.urlBase}/Nivel/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Eliminar nivel
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/Nivel/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Actualizar nivel
  updateNivel(nivel: Nivel): Observable<Nivel> {
    return this.http.put<Nivel>(`${this.urlBase}/Nivel/${nivel.id_nivel}`, nivel, { headers: new HttpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError(() => new Error('Error en la solicitud. Intenta nuevamente más tarde.'));
  }
}
