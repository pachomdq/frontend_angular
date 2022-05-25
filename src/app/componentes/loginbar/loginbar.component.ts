import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {
  logueado:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarlogueado(){
    this.logueado = !this.logueado;
  }
}
