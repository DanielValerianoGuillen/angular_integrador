import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReporteService } from '../reporte.service';




@Component({
  selector: 'app-nuevo-reporte',
  templateUrl: './nuevo-reporte.component.html',
  styleUrls: ['./nuevo-reporte.component.css']
})
export class NuevoReporteComponent implements OnInit {

  public previsualizacion: String | any;
  public archivos: any = [];

  public nombre: any;
  public reporte: any;
  public descripcion: any;
  public imagen: any;

  constructor(
    private reporteService: ReporteService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log()
  }
  public enviar() {
    const reporte = {
      'nombre': this.nombre,
      'texto': this.reporte,
      'descripcion': this.descripcion,
      'imagen': this.imagen
    };
    this.reporteService.save(reporte)
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }
  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
    //this.archivos.push(archivoCapturado);
    //console.log(event);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve): any=> {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = _error => {
        resolve({
          base: null
        });
      };
    } catch (event) {
      return null
    }
  })
}
