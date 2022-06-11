import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox'; 
import { AutenticarService } from 'src/app/servicios/autenticar.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {
  albumlst: Array<any> = [];
  edicionlist: Array<boolean> = [];
  portfolio:any;
  
  
  constructor(private _lightbox: Lightbox, private datosPortfolio:PortfolioService, private aut:AutenticarService) { 
     const album1 = {
       "src": "/assets/img/portfolio/josegomez1.jpg",
       "caption": "Portfolio creado para Argentina Programa #YoProgramo",
       "thumb": "/assets/img/portfolio/josegomez1T.jpg"
     }
     const album2 = {
      "src": "/assets/img/portfolio/proyectoartesanas.jpg",
      "caption": "Proyecto Artesanas. Plataforma E-commerce de productos de artistica. Integracion de MercadoPago y generacion de facturas AFIP",
      "thumb": "/assets/img/portfolio/proyectoartesanasT.jpg"
    }
    this.albumlst.push(album1);
    this.edicionlist.push(false);
    this.albumlst.push(album2);
    this.edicionlist.push(false);
  }
  open(index: number): void { // open lightbox 
    this._lightbox.open(this.albumlst, index); 
  } 
    
  close(): void { // close lightbox programmatically 
    this._lightbox.close(); 
  }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerPortfolio().subscribe(datos =>{
      this.portfolio = datos;
    });
  }

  agregar(): void{
    const nuevo = {
      "src": "assets/img/portfolio/nuevo.png",
      "caption": "Nueva Imagen",
      "thumb": "assets/img/portfolio/nuevoT.png"
    } 
    this.albumlst.push(nuevo);
    this.edicionlist.push(false);
  }

  borrar(indice:number): void{
    this.albumlst.splice(indice,1);
    this.edicionlist.splice(indice,1);
  }

  editar(indice:number): void{
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

  isLoggedIn()
  {
    return this.aut.isLogin()
  }

}
