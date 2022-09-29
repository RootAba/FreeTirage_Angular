import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

  constructor(private service:PostulantsService) { }

  
  ngOnInit(): void {
    
  }

}
