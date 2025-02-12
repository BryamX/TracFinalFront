import { Component } from '@angular/core';

@Component({
  selector: 'app-traduccion',
  standalone: false,
  
  templateUrl: './traduccion.component.html',
  styleUrl: './traduccion.component.css'
})
export class TraduccionComponent {

  video!: HTMLVideoElement;
  intervalId: any;

  ngAfterViewInit() {
    this.initCamera();
    this.startPrediction();
  }

  initCamera() {
    this.video = document.getElementById('video') as HTMLVideoElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.srcObject = stream;
        })
        .catch(error => {
          console.error("Error al acceder a la cámara:", error);
        });
    }
  }

  captureImage(): string {
    const canvas = document.createElement('canvas');
    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/jpeg'); // Convertir a formato base64
    }
    return '';
  }

  async makePrediction() {
    const image = this.captureImage();

    if (!image) return;

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image })
      });

      const data = await response.json();
      document.getElementById("result")!.textContent = "Predicción: " + data.prediction;
    } catch (error) {
      console.error("Error en la predicción:", error);
    }
  }

  startPrediction() {
    this.intervalId = setInterval(() => this.makePrediction(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // Apagar la cámara cuando se destruye el componente
    const stream = this.video?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  }
}
