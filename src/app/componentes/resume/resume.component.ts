import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  edicionstatus:boolean=false;
  resumen: any;
  educacion: any;
  experiencia: any;
  nombre:string ="";
  nuevo = {"nombre":"Nombre de la institucion", "lugar":"Lugar", "fecha":"rango de tiempo en la institucion", "detalle":"Detalles aqui"}
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.resumen = data.resumen;
      this.educacion = data.educacion;
      this.experiencia = data.experiencia;
      this.nombre = data.about.nombre;
    });
  }
  agregar(donde:any): void{ 
    donde.push(this.nuevo);
  }

  borrar(donde:any, indice:number): void{
    donde.splice(indice,1);  
  }
  editar(): void{
    this.edicionstatus = !this.edicionstatus;
  }

}
