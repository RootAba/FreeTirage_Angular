import { Component, OnInit } from '@angular/core';
import { PostulantsService } from '../postulants.service';
import { Tirage } from '../tirage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  formmodule!:FormGroup;
  file:any;
  fichier:any;
  listeI : any


  postulant:any;
  postRecup:any;
  constructor(private service: PostulantsService, private router:Router, private formB:FormBuilder, private http:HttpClient) { }
tirage!:Tirage[];

tirageObj:Tirage={
  idTirage:0,
  libelletirage:'',
  dateTirage:new Date()
}

idTirage:number = 0;
libelletirage:string = "";
dateTirage!: Date;
libelleListe:string='';
nombre: number = 0;

  ngOnInit() {

    this.formmodule=this.formB.group({
      libelle:['', Validators.required],
      dateListePostulant:['', Validators.required],
      file:['', Validators.required],
  })

    this.service.GetListe().subscribe(data =>{
      this.postulant=data;
    });
 
    
  }

  resetForm(){

    this.libelleListe='',
    this.libelletirage='',
    this.nombre=0
  }

//apres tirage
// RecupPostTirer(){
//   this.service.getPostApresTirage(this.libelletirage).subscribe(data =>{
//     this.postRecup=data;
//   });
// }

  PostTirage(){
    console.log(this.libelleListe)
    this.tirageObj.libelletirage=this.libelletirage;
    this.service.creerTirage(this.tirageObj,this.libelleListe,this.nombre).subscribe();
    console.log(this.libelletirage)
  
    
    this.PageApre(this.libelletirage)
    this.resetForm();

  }
  PageApre(libtirage:String){
    return this.router.navigate(['/apres_tirage',libtirage])
  }
  // PostulantTirer(){
  //   this.service.getPostApresTirage(this.libelletirage).subscribe(data =>{
  //     this.postRecup=data;
  //     console.log(data);
  //   });
  // }

  fileChange(e:any){
    this.fichier=e.target["files"][0]
    console.log(e.target['files'][0].name+" "+ e.target['files'][0].length)
  }
  importerliste(){
    this.listeI=this.formmodule.value
    this.service.addListe(this.listeI.libelle, this.fichier).subscribe(
      data=>{
        this.formmodule.reset()
      }
    )
  }

}
