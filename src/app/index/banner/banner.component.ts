import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
imgBanner:any='';
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {this.portfolioService.getDatos().subscribe (datos=>{
    console.log(datos);
    
    this.imgBanner=datos.imgBanner
    });
  }

}
