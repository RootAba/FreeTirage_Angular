import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { DetailListe } from '../detail-liste';
import { PostulantsService } from '../postulants.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.css']
})
export class DetailsListeComponent implements OnInit {

  id: number = 0;
  constructor(private route:ActivatedRoute,private service: PostulantsService) { }

  // detailListe!: DetailListe;

  detailliste:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getEmployeeById(this.id).subscribe( data => {
      this.detailliste = data;
    });
    // this.service.getlisteDetail(this.id).subscribe(data=>{
    //   this.detailliste=data;

    // })
  }

}
