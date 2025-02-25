import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  standalone: false,
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  currentSection: number = 1; // Sección actual del cuestionario
  correctAnswers: boolean[] = [false, false, false]; // Estado de si la respuesta fue correcta para cada sección
  questionImages: string[] = []; // Array de imágenes para las preguntas
  questionOptions: string[][] = []; // Opciones de respuesta para cada pregunta
  messages: string[] = []; // Mensajes de respuesta (Correcto o Incorrecto)
  correctAnswerMap: { [key: string]: string } = {}; // Mapeo de las respuestas correctas basado en imágenes aleatorias

  // Mapeo de imagen a respuesta
  imageAnswerMap: { [key: string]: string } = {
    'a.png': 'A',
    'b.png': 'B',
    'c.png': 'C',
    'd.png': 'D',
    'e.png': 'E',
    'f.png': 'F',
    'g.png': 'G',
    'h.png': 'H',
    'i.png': 'I',
    'j.png': 'J',
    'k.png': 'K',
    'l.png': 'L'
  };

  // Inicializar el cuestionario con imágenes aleatorias
  ngOnInit() {
    this.loadRandomImages();
    this.loadOptions();
  }

  // Función para cargar imágenes aleatorias de una lista de imágenes predefinidas
  loadRandomImages(): void {
    const allImages = [
      ['a.png', 'b.png', 'c.png', 'd.png'],  // Sección 1
      ['e.png', 'f.png', 'g.png', 'h.png'],  // Sección 2
      ['i.png', 'j.png', 'k.png', 'l.png']   // Sección 3
    ];

    // Seleccionamos aleatoriamente una imagen para cada sección
    this.questionImages = allImages.map(images => images[Math.floor(Math.random() * images.length)]);
  }

  // Opciones de respuesta para cada pregunta (asociadas a las imágenes)
  loadOptions(): void {
    const allOptions = [
      ['a.png', 'b.png', 'c.png', 'd.png'],  // Sección 1
      ['e.png', 'f.png', 'g.png', 'h.png'],  // Sección 2
      ['i.png', 'j.png', 'k.png', 'l.png']   // Sección 3
    ];

    // Para cada sección, asignamos aleatoriamente las imágenes y las mezclamos
    this.questionOptions = allOptions.map(options => {
      const shuffledOptions = options.sort(() => Math.random() - 0.5);
      return shuffledOptions;
    });

    // Asignar las respuestas correctas dinámicamente según las imágenes seleccionadas
    this.assignCorrectAnswers();
  }

  // Asigna respuestas correctas a las imágenes seleccionadas aleatoriamente
  assignCorrectAnswers(): void {
    this.correctAnswerMap = this.questionImages.reduce((acc, image, index) => {
      const correctAnswer = this.imageAnswerMap[image]; // La respuesta correcta depende de la imagen seleccionada
      acc[index] = correctAnswer; // Asignamos la respuesta correcta a la sección correspondiente
      return acc;
    }, {} as { [key: number]: string });
  }

  // Verificar la respuesta seleccionada y avanzar automáticamente
  checkAnswer(sectionIndex: number, optionIndex: number): void {
    const selectedImage = this.questionOptions[sectionIndex][optionIndex]; // Obtener la imagen seleccionada
    const correctAnswer = this.correctAnswerMap[sectionIndex];  // Respuesta correcta

    // Verificar si la respuesta seleccionada es correcta
    if (this.imageAnswerMap[selectedImage] === correctAnswer) {
      this.correctAnswers[sectionIndex] = true;
      this.messages[sectionIndex] = '¡Correcto! 🎉'; // Mostrar mensaje de respuesta correcta

      // Avanzar a la siguiente sección automáticamente
      setTimeout(() => {
        if (this.currentSection < 3) {
          this.currentSection++; // Avanzar a la siguiente sección
        } else {
          this.advanceToCertificate(); // Si todas las secciones fueron respondidas correctamente, mostrar el certificado
        }
      }, 1000); // Espera 1 segundo antes de cambiar de sección
    } else {
      this.correctAnswers[sectionIndex] = false;
      this.messages[sectionIndex] = 'Incorrecto. Intenta nuevamente. ❌'; // Mostrar mensaje de respuesta incorrecta
    }
  }

  // Función para avanzar automáticamente a la sección del certificado
  advanceToCertificate(): void {
    this.currentSection = 4; // Cambiar a la sección del certificado
  }

  // Generar el certificado (simulación de descarga de archivo)
  generateCertificate(): void {
    const certificateContent = '¡Felicidades! Has completado el cuestionario correctamente.';
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'certificado.txt'; // Nombre del archivo
    link.click(); // Inicia la descarga
  }

  // Función para quitar la extensión .png cuando se muestra en el front-end
  removePngExtension(image: string): string {
    return image.replace('.png', ''); // Eliminar la extensión .png solo para la visualización en el front-end
  }
}
