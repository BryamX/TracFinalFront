import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import { LoginComponent } from './Pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './Services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CrudUsuarioComponent } from './Pages/crud-usuario/crud-usuario.component';
import { DescargaAppComponent } from './Pages/descarga-app/descarga-app.component';
import { PoliticasComponent } from './Pages/politicas/politicas.component';
import { JuegosComponent } from './Pages/juegos/juegos.component';
import { TraduccionComponent } from './traduccion/traduccion.component';
import { EducacionComponent } from './Pages/educacion/educacion.component';
import { CategoriasComponent } from './Pages/categorias/categorias.component';
import { AprendizajesComponent } from './Pages/aprendizajes/aprendizajes.component';
import { NivelesComponent } from './Pages/niveles/niveles.component';
import { JuegoCartasComponent } from './Pages/juegos/juego-cartas/juego-cartas.component';
import { JuegoAtrapaSenasComponent } from './Pages/juegos/juego-atrapa-senas/juego-atrapa-senas.component';
import { EditarCrudComponent } from './Pages/editar-crud/editar-crud.component'; // Asegúrate de importarlo aquí

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    NosotrosComponent,
    FooterComponent,
    NombreDelComponenteComponent,
    LoginComponent,
    CrudUsuarioComponent,
    DescargaAppComponent,
    PoliticasComponent,
    JuegosComponent,
    TraduccionComponent,
    EducacionComponent,
    CategoriasComponent,
    AprendizajesComponent,
    NivelesComponent,
    JuegoCartasComponent,
    JuegoAtrapaSenasComponent,
    EditarCrudComponent // Debería estar aquí en 'declarations'
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    // No es necesario agregar 'NivelesComponent' en 'imports'
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
