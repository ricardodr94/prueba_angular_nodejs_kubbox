import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ocultarContenido: boolean = false;
  ocultarTablero: boolean = false;
  ocultarPtventa: boolean = false;
  ocultarCatalago:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
