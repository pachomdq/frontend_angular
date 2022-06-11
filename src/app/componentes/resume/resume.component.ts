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
    this.datosPortfolio.obtenerExperiencia().subscribe(data => {
      this.experiencia = data;
    });
    this.datosPortfolio.obtenerAbout().subscribe(data => {
      this.nombre = data[0].nombre;
      this.resumen = {"resumen":data[0].resumen, "direccion":data[0].direccion, 
      "telefono":data[0].telefono, "email":data[0].email};
    });
    this.datosPortfolio.obtenerEducacion().subscribe(data =>{
      this.educacion = data;
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
