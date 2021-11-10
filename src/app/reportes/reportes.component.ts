import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  public reportes: any;

  constructor(
    private service: ReporteService
  ) { }

  ngOnInit(): void {
    this.service.findAll()
        .subscribe(response => {
          this.reportes = response;
        });
  }

}
