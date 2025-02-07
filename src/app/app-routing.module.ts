import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudUsuarioComponent } from './Pages/crud-usuario/crud-usuario.component';
import { DescargaAppComponent } from './Pages/descarga-app/descarga-app.component';
import { PoliticasComponent } from './Pages/politicas/politicas.component';
import { NivelesComponent } from './Pages/niveles/niveles.component';
import { CategoriasComponent } from './Pages/categorias/categorias.component';
import { AprendizajesComponent } from './Pages/aprendizajes/aprendizajes.component';
import { JuegosComponent } from './Pages/juegos/juegos.component';  
import { TraduccionComponent } from './traduccion/traduccion.component';
import { EducacionComponent } from './Pages/educacion/educacion.component';
import { EditarCrudComponent } from './Pages/editar-crud/editar-crud.component';
import { ComoesComponent } from './Pages/comoes/comoes.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Redirección al Login al iniciar
  { path: "login", component: LoginComponent },
  { path: "inicio", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "registrarse", component: CrudUsuarioComponent },
  { path: "aplicacion", component: DescargaAppComponent },
  { path: "politicas", component: PoliticasComponent },
  { path: "juegos", component: JuegosComponent },  // Asegurar que esta ruta está bien definida
  { path: "traduccion", component: TraduccionComponent },
  { path: "educacion", component: EducacionComponent },
  { path: "comoes", component: ComoesComponent },
  {
    path:"niveles",
    component:NivelesComponent
  },
  {
    path:"categorias",
    component:CategoriasComponent
  },
  {
    path:"aprendizajes",
    component:AprendizajesComponent
  }
  ,
  {
    path:"editar-usuario",
    component:EditarCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
