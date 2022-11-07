import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
formacion:any=[];
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void { this.portfolioService.getDatos().subscribe (datos=>{
    console.log(datos);
    this.formacion=datos.formacion;
    
    });

  }

}
