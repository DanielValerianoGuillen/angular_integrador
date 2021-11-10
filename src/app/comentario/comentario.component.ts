
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  private idReporte: any;
  public reporte: any;
  public nombre: any;
  public comentario: any;


  constructor(
    private route: ActivatedRoute,
    private service: ReporteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idReporte = this.route.snapshot.paramMap.get("id");
    console.log(this.idReporte);
    this.service.find(this.idReporte).subscribe(
      response => {
          this.reporte = response;
        },_error =>{
          this.router.navigate(['/'])
        });
  }
  public enviar(){
    const data  = {
      "comentario": this.comentario,
      "nombre": this.nombre
    };
    this.service.addComment(this.reporte.id, data)
        .subscribe(() => {
          this.ngOnInit();
        });

  }
}
