import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  nombre:string='';
  apellido:string='';
  desarrollador:string='';
  acerca_de_mi:string='';
  imgPerfil:any='';
   


  constructor( private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe (datos=>{
    console.log(datos);
    this.nombre=datos.nombre;
    this.apellido=datos.apellido;
    this.desarrollador=datos.desarrollador;
    this.acerca_de_mi=datos.acerca_de_mi;
    this.imgPerfil=datos.imgPerfil;
    
    });
  }

}
