import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hys:any=[];
  
  
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void { this.portfolioService.getDatos().subscribe (datos=>{
    console.log(datos);
    this.hys=datos.hys;
    
    });
  }
  }
