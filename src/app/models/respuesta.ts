class Respuesta{
    private usuario:string;
    private password:string;
    private token:string;

    constructor(u:string,p:string,t:string){
        this.usuario = u;
        this.password = p;
        this.token = t;
    }
}