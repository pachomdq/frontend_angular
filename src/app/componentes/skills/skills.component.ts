import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  informacion: any;
  nuevo: any = {"nombre": "Habilidad", "valor": 100};


  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.informacion = data.skills;
    });
  }

  agregar(): void{ 
    this.informacion.push(this.nuevo);
  }

  borrar(indice:number): void{
    this.informacion.splice(indice,1);  
  }

}
