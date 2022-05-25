import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume-experiencia-card',
  templateUrl: './resume-experiencia-card.component.html',
  styleUrls: ['./resume-experiencia-card.component.css']
})
export class ResumeExperienciaCardComponent implements OnInit {
  edicionlist:Array<boolean> = [false];
  
  @Output() aborrar = new EventEmitter<number>();


  @Input()
  id!:number;
  @Input()
  nombre: string = "";
  @Input()
  fecha: string = "";
  @Input()
  lugar: string = "";
  @Input() detalle: string="";
  

  constructor() { }

  ngOnInit(): void {
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

  borrar(indice:number):void
  {
    this.aborrar.emit(indice);
  }

}
