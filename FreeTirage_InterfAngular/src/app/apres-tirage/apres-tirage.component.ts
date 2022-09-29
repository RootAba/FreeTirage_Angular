import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-apres-tirage',
  templateUrl: './apres-tirage.component.html',
  styleUrls: ['./apres-tirage.component.css']
})
export class ApresTirageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:PostulantsService) { }

libtirage:any;
libTirageRecup:any;
  post:any;
  ngOnInit(): void {
    this.libtirage = this.route.snapshot.params['libtirage']
    console.log(this.libtirage)

    this.service.getPostApresTirage(this.libtirage).subscribe(data =>{
      this.libTirageRecup=data;
      console.log(data);
    
  });
  }
}
