import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tirage } from './tirage';
@Injectable({
  providedIn: 'root'
})
export class PostulantsService {
  url = "http://localhost:8080/tirage/idListePostulant";
  constructor(private http:HttpClient) { }

  GetPostulants():Observable<object>{

    return this.http.get("http://localhost:8080/postulantTire/AffichagePostTirer");
  }

  GetListe():Observable<object>{
    return this.http.get("http://localhost:8080/tirage/AffichageTouteslistes");
  }

  getlisteDetail(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  getlisteById(id: number): Observable<object>{
    return this.http.get(`${this.url}/${id}`);
  }
  
  // fonction tout tirage en fonction idliste
urll="http://localhost:8080/tirage/toutTirageIdListe"
  getToutTirage(id: number): Observable<object>{
    return this.http.get(`${this.urll}/${id}`);
  }

  // fonction tout postulants tires sur un tirage donné
  url1="http://localhost:8080/postulantTire/AffichagePostTire"
  getToutPostTirer(id: number): Observable<object>{
    return this.http.get(`${this.url1}/${id}`);
  }


  //Fpnction recup nombre total de tiirage
  getNombreTirage(): Observable<object>{
    return this.http.get("http://localhost:8080/tirage/NombreTirage");
  }


  creerTirage(tirage:Tirage,libelleListe:string,nombre:number):Observable<Tirage>{
    return this.http.post<Tirage>(`http://localhost:8080/tirage/creerTirage/${libelleListe}/${nombre}`,tirage);
  }

  // importerFile(libelletirage:string):Observable<object>{
  //   return this.http.post(`http://localhost:8080/postulant/importation/${libelletirage}`);
  // }

  api="http://localhost:8080/postulant/importation"
  addListe(libelle:string, file:any):Observable<void>{
    let data=new FormData();
    data.append("file",file)
    return this.http.post<void>(`${this.api}/${libelle}`, data);
  }

  //rechercher tirage
  ur="http://localhost:8080/tirage/rechercheTirage";
  RechercheTirage(libelle : String):Observable<object>{
    return this.http.get(`${this.ur}/${libelle}`)
  }

  //nombre de liste tirer
  nbreListeTirer="http://localhost:8080/tirage/nombreListeTirer";
  NombreListeTirer():Observable<object>{
    return this.http.get(`${this.nbreListeTirer}`)
  }


  u="http://localhost:8080/tirage/liste";
  getListeFonctioonId(id: number): Observable<any>{
    return this.http.get(`${this.u}/${id}`);
  }

  //recuperer les postualnts tirés sur le champs
  instant="http://localhost:8080/postulantTire/AffichageTousPostIdTirage";

  getPostApresTirage(libtirag: String): Observable<any>{
    return this.http.get(`${this.instant}/${libtirag}`);
  }
  nb="http://localhost:8080/postulantTire/AffNombre";
  getNombrePostidTir(idTirage: number): Observable<any>{
    return this.http.get(`${this.instant}/${idTirage}`);
  }
}
