import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {
  id: number = 0;
  p:number=1;
  postulanttirer:any;
  constructor(private route:ActivatedRoute, private service:PostulantsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // this.service.GetPostulants().subscribe(data =>{
    //   this.postulant=data;

    //Fonction applelant la methode du service qui fait reference au postu tire par id tirage

    this.service.getToutPostTirer(this.id).subscribe(data =>{
         this.postulanttirer=data;
    });

    
  }

}
