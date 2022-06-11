import AOS from 'aos';
import { Component, Input, OnInit } from '@angular/core';
import { AutenticarService } from './servicios/autenticar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  constructor(public autService:AutenticarService){
  }

  ngOnInit() {
    AOS.init();
  }

  isLoggedIn()
  {
    return this.autService.isLogin()
  }
  
}
