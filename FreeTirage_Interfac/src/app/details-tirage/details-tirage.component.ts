import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';
@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {

  postulant:any;
  constructor(private service:PostulantsService) { }

  ngOnInit(): void {
    this.service.GetPostulants().subscribe(data =>{
      this.postulant=data;
    })
  }

}
