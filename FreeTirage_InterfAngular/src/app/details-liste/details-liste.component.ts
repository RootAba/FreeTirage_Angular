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
  p:number=1;
   start = Date.now();
  constructor(private route:ActivatedRoute,private router: Router,private service: PostulantsService) { }

  // detailListe!: DetailListe;

nombre:any;
  detailliste:any;
  libliste:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // this.service.getlisteById(this.id).subscribe( data => {
    //   this.detailliste = data;
    // });
    // this.service.getListeFonctioonId(this.id).subscribe(data=>{
    //   this.libliste = data.libelle;
    //   console.log(this.libliste)

    // });
    this.service.getToutTirage(this.id).subscribe(data=>{
      this.detailliste=data;

    });
    this.service.getNombrePostidTir(this.id).subscribe(data=>{
      this.nombre=data;

    });
    // this.id = this.route.snapshot.params['id']
    // this.service.getlisteById(this.id).subscribe( data => {
    //   this.detaillist = data;
    // });

  }

 
  
//fonction redirection vers deta
goToDetailTirage(id:number){
  console.log(id);
  return this.router.navigate(['/detailtirage',id])
 
}

}
