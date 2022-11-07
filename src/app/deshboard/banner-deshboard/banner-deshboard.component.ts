import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-banner-deshboard',
  templateUrl: './banner-deshboard.component.html',
  styleUrls: ['./banner-deshboard.component.css']
})
export class BannerDeshboardComponent implements OnInit {
imgBanner:any='';
  constructor(private portfolioService:PortfolioService ) { }

  ngOnInit(): void {
  }

}
