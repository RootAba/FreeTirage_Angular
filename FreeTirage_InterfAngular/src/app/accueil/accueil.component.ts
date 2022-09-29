import { Component, OnInit } from '@angular/core';
//import {Chart} from 'node_modules/chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
//import { Labels } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { Postulants } from '../postulants';
import { PostulantsService } from '../postulants.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: BaseChartDirective["labels"] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [35, 50, 60, 40], label: 'Tirage en fonction de liste donnée' }
  ];

  constructor(private service: PostulantsService) { }
nombre:any
postulant:any=[];
nombreListeTirer:any
  ngOnInit() {
    this.service.getNombreTirage().subscribe(data=>{
      this.nombre=data;
      console.log(data);

    });
    //Appeller liste total
    this.service.GetListe().subscribe(data =>{
      this.postulant=data;
      console.log(this.postulant[0][2])
      this.barChartLabels= [this.postulant[0][2], this.postulant[1][2], this.postulant[2][2], this.postulant[3][2]];
    });

    this.service.NombreListeTirer().subscribe(data =>{
        this.nombreListeTirer=data
        console.log(data)

    })
    
    
  }

}
