import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/services/api-node.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuarios: any[]= [];
  puntos_venta: any[] = [];
  usuariosPtventa: any[] = [];
  

  constructor( private apiNode: ApiNodeService ) { }

  ngOnInit(): void {
    this.getUsuariosPventa();
  }
  
  getUsuarios(){
     this.apiNode.getDataUsuarios().subscribe( (dataUsuarios:any) =>{
       console.log(dataUsuarios);
          this.usuarios = dataUsuarios.usuario;
          console.log(this.usuarios);
     });
  }

  getPuntosVenta(){
    this.apiNode.getDataPuntosVenta().subscribe((dataPuntosVenta:any)=>{
        this.puntos_venta = dataPuntosVenta.puntos_venta;
    });
  }

  
  getUsuariosPventa(){
    this.apiNode.getDataUsuariosPtventa().subscribe((results:any)=>{
        this.usuariosPtventa = results.results;
        console.log(this.usuariosPtventa);
        console.log(results);

    });
  }

}







