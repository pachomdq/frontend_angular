import { Component, OnInit, ViewChild,ElementRef,HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjetafacts',
  templateUrl: './tarjetafacts.component.html',
  styleUrls: ['./tarjetafacts.component.css']
})
export class TarjetafactsComponent implements OnInit {
  edicionlist:Array<boolean> = [false];
  @Output() aborrar = new EventEmitter<string>();

  @Input() id: string="";
  @Input() limite!: number;
  @Input() texto!:string;
  @Input() imagenURL!:string;
  @Input() horas: string = "";

  coun:number=0;
  heightEl=0;

  opciones = {
    useGrouping: false
  }

  constructor() {
    
   }
 
  ngOnInit(): void {
    this.horas = this.limite.toString();
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
    this.coun= parseInt(this.horas);
    this.limite = parseInt(this.horas);
  }
  borrar(indice:string):void
  {
    this.aborrar.emit(indice);
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

