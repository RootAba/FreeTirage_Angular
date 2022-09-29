import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css']
})
export class ListePostulantComponent implements OnInit {

  postulant:any;
  p:number=1;
  id: number = 0;
   detailliste:any;
  constructor(private route:ActivatedRoute, private router: Router,private service: PostulantsService) { }

  ngOnInit(){
    this.service.GetListe().subscribe(data =>{
      this.postulant=data;
    });
//recuperation de l'id en parama
    this.id = this.route.snapshot.params['id']
    this.service.getlisteById(this.id).subscribe( data => {
      this.detailliste = data;
    });
  }
   //redirection vers lsite details
   listeDetails(id: number){
   return this.router.navigate(['/detailliste', id]);
  }

  goToDetailliste(id:number){
    console.log(id);
    return this.router.navigate(['/detailliste',id])
  }

  //fonction detail liste
}
 

  // detailListe!: DetailListe;

