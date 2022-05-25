import { Component, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  edicionlist:Array<boolean> = [];
  
  informacion: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.informacion = data.about;
    });
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

}
