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

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Redirección al Login al iniciar
  { path: "login", component: LoginComponent },
  { path: "inicio", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "registrarse", component: CrudUsuarioComponent },
  { path: "aplicacion", component: DescargaAppComponent },
  { path: "politicas", component: PoliticasComponent },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
