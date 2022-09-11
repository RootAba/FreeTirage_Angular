import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostulantsService {
  url = "http://localhost:8080/tirage/AffichageTouteslistes";
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

  getEmployeeById(id: number): Observable<object>{
    return this.http.get(`${this.url}/${id}`);
  }
}
