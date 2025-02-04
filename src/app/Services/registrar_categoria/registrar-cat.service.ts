import { Injectable } from '@angular/core';
import { Categoria } from './Categoria';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../../enviroment/appConfig';

@Injectable({
  providedIn: 'root'
})
export class RegistrarCatService {
  private urlBase = appConfig.baseUrl;

  
    constructor(private http: HttpClient) {}

    //Crear categorias
    create(categoria: Categoria): Observable<Categoria> {
      return this.http.post<Categoria>(`${this.urlBase}/Categoria`, categoria, { 
        headers: new HttpHeaders ({
          'Content-Type': 'application/json'

        })})
    }

  
    // Obtener todos los categorias
    getCategoria(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(`${this.urlBase}/Categoria`);
      
    }
  
    // Obtener categoria por ID
    getCategoriabyId(id: any): Observable<Categoria> {
      return this.http.get<Categoria>(`${this.urlBase}/Categoria/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  
    // Eliminar categoria
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.urlBase}/Categoria/${id}`).pipe(
        catchError(this.handleError)
      );
    }
  
    // Actualizar categoria
    updateCategoria(categoria: Categoria): Observable<Categoria> {
      const url = `${this.urlBase}/Categoria/${categoria.id_categoria}`;
      return this.http.put<Categoria>(url, categoria, {
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
