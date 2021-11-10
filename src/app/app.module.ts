import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NuevoReporteComponent } from './nuevo-reporte/nuevo-reporte.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ComentarioComponent } from './comentario/comentario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NuevoReporteComponent,
    ReporteComponent,
    ReportesComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
