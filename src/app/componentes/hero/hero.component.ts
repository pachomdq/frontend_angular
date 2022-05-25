import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import Typed from 'typed.js'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  edicionlist:Array<boolean> = [false];
  
  nombre: any;
  constructor(private datosPortfolio:PortfolioService) { }
  options :any;
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.nombre = data.about.nombre;
      this.options = {
        strings: data.about.caracteristicas,
        typeSpeed: 80,
        backSpeed: 100,
        showCursor: true,
        cursorChar: "|",
        loop: true
      }
    });
    
    
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

}