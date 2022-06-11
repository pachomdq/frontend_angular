import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  private urlServer: string ="https://agile-sea-39509.herokuapp.com/";
  private currentUserSubject: BehaviorSubject<boolean>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<boolean>(false);
  }

  private saveToken(respuesta:any)
  {
    localStorage.clear();
    if (respuesta.token != null){
      localStorage.setItem('usuario', respuesta.usuario)
      localStorage.setItem('token', respuesta.token);
      this.currentUserSubject.next(true);
    }
  }

  IniciarSesion(usr:string, psw:string):Observable<any | void>{
    return this.http
    .post(this.urlServer + "login",{"usuario":usr,"password":psw})
    .pipe(
      map( (data:any) => {
        this.saveToken(data)
      })
    );
  }

  logout(){
    localStorage.clear();
    this.currentUserSubject.next(false);
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  isLogin(){
    return localStorage.getItem('token') != null
  }
}
