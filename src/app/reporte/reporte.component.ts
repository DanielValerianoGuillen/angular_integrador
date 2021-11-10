import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @Input() public reporte: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.reporte);
  }

}
