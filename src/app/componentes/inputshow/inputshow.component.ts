import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputshow',
  templateUrl: './inputshow.component.html',
  styleUrls: ['./inputshow.component.css']
})
export class InputshowComponent implements OnInit {
  @Output() textoChange = new EventEmitter<string>();

  @Input()
  texto: string = "";
  
  @Input() endchar: string ="";
  @Input() label: string ="";
  @Input()
  editable = true;

  @Input()
  grande = false;

  @Input()
  oculto = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEnter(event: any){
    this.texto = event.target.value;
    this.editable = !this.editable;
    this.textoChange.emit(event.target.value);
  }
  onChange(event: any){
    this.texto = event.target.value;
    this.textoChange.emit(event.target.value);
  }
  
}
