import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicios/autenticar.service';
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
  constructor(private datosPortfolio:PortfolioService, private aut:AutenticarService) { }
  options :any;
  ngOnInit(): void {
   
    this.datosPortfolio.obtenerAbout().subscribe(data => {
      this.nombre = data[0].nombre;
    });
    this.options = {
      strings: ["Desarrollador", "Programador", "Artista Grafico"],
      typeSpeed: 80,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      loop: true
    }
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

  isLoggedIn()
  {
    return this.aut.isLogin()
  }

}