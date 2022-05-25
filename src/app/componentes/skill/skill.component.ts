import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  edicionlist:Array<boolean> = [false];
  
  @Output() aborrar = new EventEmitter<number>();
  
  @Input() valor: string = "";
  @Input() nombre: string = "";
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {

    let val = parseInt(this.valor);
    for (let i=0; i > 100; i++){
      window.setTimeout(() => 
      (val +=1), i*1000);
    }
    this.valor = val.toString();
  }
  edicion(indice:number):void {
    this.edicionlist[indice] = !this.edicionlist[indice];
  }

  borrar(indice:number):void
  {
    this.aborrar.emit(indice);
  }
}
