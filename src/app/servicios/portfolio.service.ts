import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  urlServer: string ="https://agile-sea-39509.herokuapp.com/";
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}

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
    return this.http.post(this.urlServer + "skills/" + localStorage.getItem("usuario") + "/" + localStorage.getItem("token") ,JSON.stringify(datos),this.httpOptions);
  }

  obtenerPortfolio():Observable<any>{
    return this.http.get(this.urlServer + "portfolio");
  }

  modificarAbout(datos:any):Observable<any>{
    return this.http
    .put(this.urlServer + "about/"+ datos.id + "/" + localStorage.getItem('usuario') + "/" + localStorage.getItem('token'),JSON.stringify(datos),this.httpOptions)
  }

  agregarFacts(datos:any):Observable<any>{ 
    return this.http
    .post(this.urlServer + "facts/" + localStorage.getItem('usuario') + "/" + localStorage.getItem('token'), JSON.stringify(datos),this.httpOptions)
  }

  modificarFacts(data:string):Observable<any>{
    let datos = JSON.parse(data)
    return this.http
    .put(this.urlServer + "facts/" + datos.id + "/" + localStorage.getItem('usuario') + "/" + localStorage.getItem('token'), JSON.stringify(datos), this.httpOptions)
  }

  eliminarFacts(data:any):Observable<any>{
    return this.http.delete(this.urlServer + "facts/"+ data.id + "/" + localStorage.getItem('usuario') + "/" + localStorage.getItem('token'),this.httpOptions)
  }

  eliminarSkills(data:any):Observable<any>{
    return this.http.delete(this.urlServer + "skills/" + data.id + "/" + localStorage.getItem('usuario') + "/" + localStorage.getItem('token'), this.httpOptions)
  }

  

}
