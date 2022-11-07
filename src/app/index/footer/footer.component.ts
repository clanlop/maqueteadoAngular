import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer:any='';
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {this.portfolioService.getDatos().subscribe (datos=>{
    console.log(datos);
    this.footer=datos.footer;
    
    });
  }

}
