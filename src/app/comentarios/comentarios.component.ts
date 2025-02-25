import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  standalone: false,
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comments: string[] = []; // Array para almacenar los comentarios
  newComment: string = ''; // Nuevo comentario ingresado

  // Método para enviar un comentario
  submitComment(): void {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment.trim()); // Añadir el comentario al array
      this.newComment = ''; // Limpiar el campo de texto después de enviar el comentario
    }
  }
}
