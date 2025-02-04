import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

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
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule
   
  ],
  providers: [ LoginService,
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
