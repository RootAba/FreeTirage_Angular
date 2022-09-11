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
  id: number = 0;
  detailliste:any;
  constructor(private route:ActivatedRoute, private router: Router,private service: PostulantsService) { }

  ngOnInit(){
    this.service.GetListe().subscribe(data =>{
      this.postulant=data;
    });

    this.id = this.route.snapshot.params['id']
    this.service.getEmployeeById(this.id).subscribe( data => {
      this.detailliste = data;
    });
  }
   //redirection vers lsite details
   listeDetails(id: number){
    this.router.navigate(['detailliste', id]);
  }

}
 

  // detailListe!: DetailListe;

