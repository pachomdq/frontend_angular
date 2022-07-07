import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicios/autenticar.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  informacion: any;
  nuevo:any  = {"imagenURL":"assets/img/nuevo.png","texto":"Datos o informacion a mostrar","horas":999};
  constructor(private datosPortfolio:PortfolioService, private aut:AutenticarService) { }
  

  ngOnInit(): void {
    this.datosPortfolio.obtenerFacts().subscribe(data => {
      this.informacion = data;
    });
  }
  agregar(): void{
    
    this.informacion.push(this.nuevo);
    this.datosPortfolio.agregarFacts(this.nuevo).subscribe()
  }

  borrar(i:string): void{
    if (window.confirm("Este elemento se eliminara permanentemente. ¿Desea Continuar?")){
      this.datosPortfolio.eliminarFacts(this.informacion[parseInt(i)]).subscribe() 
      this.informacion.splice(parseInt(i),1);
    }
  }

  guardar(card:string): void{   
    this.datosPortfolio.modificarFacts(card).subscribe(() => {  
    })
  }

  isLoggedIn()
  {
    return this.aut.isLogin()
  }
}