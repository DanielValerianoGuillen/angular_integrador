import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './comentario/comentario.component';
import { NuevoReporteComponent } from './nuevo-reporte/nuevo-reporte.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reportes',
    pathMatch: 'full',
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'nuevo-reporte',
    component: NuevoReporteComponent
  },
  {
    path: 'reporte/:id',
    component: ComentarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
