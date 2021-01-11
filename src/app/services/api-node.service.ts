import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor( private htpp: HttpClient ) { }


  //metodo para consumir datos de tabla usuarios
  getDataUsuarios(){

    return this.htpp.get('http://localhost:3000/usuarios');
  }

  //metodo para consumir datos de tabla puntos de venta
  getDataPuntosVenta(){
    return this.htpp.get('http://localhost:3000/puntos_venta');
  }

    //metodo para consumir datos de tabla asignacion
    getDataAsignacion(){
      return this.htpp.get('http://localhost:3000/asignacion');
    }

    //metodo para consumir datos de tablas de MySQL
    getDataUsuariosPtventa(){
      return this.htpp.get('http://localhost:3000/usuariosPtventa');
    }


}


