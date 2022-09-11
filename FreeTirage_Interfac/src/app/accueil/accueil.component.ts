import { Component, OnInit } from '@angular/core';
//import {Chart} from 'node_modules/chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
//import { Labels } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: BaseChartDirective["labels"] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [35, 50, 60, 40, 36, 20], label: 'Tirage en fonction du jour' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
