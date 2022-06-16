import { Component, OnInit, ViewChild,ElementRef,HostListener, Input, Output, EventEmitter } from '@angular/core';
import { AutenticarService } from 'src/app/servicios/autenticar.service';
@Component({
  selector: 'app-tarjetafacts',
  templateUrl: './tarjetafacts.component.html',
  styleUrls: ['./tarjetafacts.component.css']
})
export class TarjetafactsComponent implements OnInit {
  edicionlist:Array<boolean> = [false];
  @Output() aborrar = new EventEmitter<string>();
  @Output() aguardar = new EventEmitter<string>();

  @Input() i!:string;
  @Input() id!: string;
  @Input() limite!: number;
  @Input() texto!:string;
  @Input() imagenURL!:string;
  @Input() horas: string = "";


  coun:number=0;
  heightEl=0;

  opciones = {
    useGrouping: false
  }

  constructor(private aut:AutenticarService) {
    
   }
 
  ngOnInit(): void {
    this.horas = this.limite.toString();
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
    this.coun= parseInt(this.horas);
    this.limite = parseInt(this.horas);
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

  borrar(i:string):void
  {
    this.aborrar.emit(i);
  }

  guardar():void
  {
    this.coun= parseInt(this.horas);
    this.limite = parseInt(this.horas);
    this.edicionlist.fill(false)
    let card = {"id":this.id,
            "texto":this.texto,
            "horas":this.horas,
            "imagenURL":this.imagenURL
    }
    this.aguardar.emit(JSON.stringify(card));
  }
  
  @HostListener('window:scroll', ['$event'])   
  onWindowScroll($event: any) {
    var rect = this.counte.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.coun=this.limite:null
  } 

  @ViewChild('counte')
  counte!: ElementRef;

}

