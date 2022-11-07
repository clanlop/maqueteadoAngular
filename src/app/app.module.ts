import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { LoginComponent } from './modal/login/login.component';
import { RedesComponent } from './index/redes/redes.component';
import { MiPerfilComponent } from './index/mi-perfil/mi-perfil.component';
import { ExperienciaComponent } from './index/experiencia/experiencia.component';
import { EducacionComponent } from './index/educacion/educacion.component';
import { HabilidadesComponent } from './index/habilidades/habilidades.component';
import { ProyectosComponent } from './index/proyectos/proyectos.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbardeshboardComponent } from './deshboard/navbardeshboard/navbardeshboard.component';
import { RedesdeshboardComponent } from './deshboard/redesdeshboard/redesdeshboard.component';
import { LoginoutComponent } from './modal/loginout/loginout.component';

import { SobreMideshboardComponent } from './deshboard/sobre-mideshboard/sobre-mideshboard.component';
import { BotonedicionSobremiComponent } from './deshboard/boton-edicion/botonedicion-sobremi.component';
import { ExperienciaDeshboardComponent } from './deshboard/experiencia-deshboard/experiencia-deshboard.component';
import { EducacionDeshboardComponent } from './deshboard/educacion-deshboard/educacion-deshboard.component';
import { FotoPerfildeshboardComponent } from './deshboard/foto-perfildeshboard/foto-perfildeshboard.component';
import { BannerDeshboardComponent } from './deshboard/banner-deshboard/banner-deshboard.component';
import { ProyectoDeshboardComponent } from './deshboard/proyecto-deshboard/proyecto-deshboard.component';
import { ReferenciasDeshboardComponent } from './deshboard/referencias-deshboard/referencias-deshboard.component';
import { HabilidadesDeshboardComponent } from './deshboard/habilidades-deshboard/habilidades-deshboard.component';
import { FooterComponent } from './index/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BannerComponent } from './index/banner/banner.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    MiPerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    DeshboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbardeshboardComponent,
    RedesdeshboardComponent,
    LoginoutComponent,

    SobreMideshboardComponent,
    BotonedicionSobremiComponent,
    ExperienciaDeshboardComponent,
    EducacionDeshboardComponent,
    FotoPerfildeshboardComponent,
    BannerDeshboardComponent,
    ProyectoDeshboardComponent,
    ReferenciasDeshboardComponent,
    HabilidadesDeshboardComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
