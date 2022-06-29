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
  botonDeshabilitado = false
  textoBoton = "Guardar cambios"

  about: any;
  constructor(private datosPortfolio:PortfolioService, private aut:AutenticarService) { }
  options :any;
  ngOnInit(): void {
   
    this.datosPortfolio.obtenerAbout().subscribe(data => {
      this.about = data[0]
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

  guardar():void {
    this.edicionlist.fill(false) //elimina cajas de seleccion una vez guardado
    this.botonDeshabilitado = true
    this.textoBoton="Guardando..."
    this.datosPortfolio.modificarAbout(this.about).subscribe(() =>{
        this.textoBoton="Guardado"
        this.botonDeshabilitado = false
    });
  }

}