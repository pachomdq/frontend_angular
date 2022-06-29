import { Component, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AutenticarService } from 'src/app/servicios/autenticar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  edicionlist:Array<boolean> = [];
  textoBoton = "Guardar cambios"
  botonDeshabilitado = false
  informacion: any;
  about: any;
  constructor(private datosPortfolio:PortfolioService, private aut:AutenticarService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.informacion = data.about;
    });

    this.datosPortfolio.obtenerAbout().subscribe(datos =>{
      this.about = datos[0];
    });
    
    
  }
  edicion(indice:number):void {
    this.textoBoton="Guardar cambios"
    this.edicionlist.fill(false) // permite elegir solo una a la vez
    this.edicionlist[indice] = !this.edicionlist[indice];
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

  isLoggedIn()
  {
    let login = this.aut.isLogin()
    // elimina las cajas de edicion en caso de logout
    if (!login)
    {
      this.edicionlist.fill(false)
    }
    return login
  }

}
