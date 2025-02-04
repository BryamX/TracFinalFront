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

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Redirección al Login al iniciar
  { path: "login", component: LoginComponent },
  { path: "inicio", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "registrarse", component: CrudUsuarioComponent },
  { path: "aplicacion", component: DescargaAppComponent },
  { path: "politicas", component: PoliticasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
