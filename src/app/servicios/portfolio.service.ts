import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  urlServer: string ="https://agile-sea-39509.herokuapp.com/";

  constructor(private http:HttpClient) { }
  

  obtenerDatos():Observable<any> {
    return this.http.get('/assets/data/datos.json');

  }

  obtenerExperiencia():Observable<any>{
    return this.http.get(this.urlServer + "experiencia");
  }

  obtenerEducacion():Observable<any>{
    return this.http.get(this.urlServer + "educacion");
  }

  obtenerAbout():Observable<any> {
    return this.http.get(this.urlServer + "about");

  }
  obtenerFacts():Observable<any>{
    return this.http.get(this.urlServer + "facts");
  }

  obtenerSkills():Observable<any>{
    return this.http.get(this.urlServer + "skills");
  }

  agregarSkill(datos:any):Observable<any>{
    return this.http.post(this.urlServer + "skills",datos);
  }

  obtenerPortfolio():Observable<any>{
    return this.http.get(this.urlServer + "portfolio");
  }

  modificarAbout(datos:any):Observable<any>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    return this.http
    .put(this.urlServer+ "about/"+ datos.id + "/" + localStorage.getItem('usuario')+"/"+localStorage.getItem('token'),JSON.stringify(datos),httpOptions)
  }
}
