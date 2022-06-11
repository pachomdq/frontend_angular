import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticarService } from 'src/app/servicios/autenticar.service';

@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {
  form:FormGroup;
  errorusuario = "Ingrese un usuario";
  errorpassword = "Ingrese una contraseña";
  visible = false;
  logueado = false;
  editor = "";
  
  constructor(private formBuilder:FormBuilder, private autService:AutenticarService) { 
   
    this.form=this.formBuilder.group(
      {
        usuario:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
    {
      this.logueado = true;
      this.editor = localStorage.getItem('usuario') || ""
    }
  }

  get Usuario()
  {
    return this.form.get('usuario');
  }

  get Password(){
    return this.form.get('password');
  }

  verLogin(){
    this.visible = !this.visible;
  }

  onEnviar(){
    //event.preventDefault;
    
    var usr = this.form.get('usuario');
    var psw = this.form.get('password');
    if (usr && psw) {
      this.autService.IniciarSesion(usr.value, psw.value).subscribe(
        data => {
          this.logueado = this.autService.UsuarioAutenticado
          if (!this.logueado){
            window.alert("Error en credenciales")
          }
        }
      );
    }

  }

  onLogout(){
    
    this.autService.logout();
    this.form.reset({usuario:'',password:''});
    this.logueado = false;
  }
}
