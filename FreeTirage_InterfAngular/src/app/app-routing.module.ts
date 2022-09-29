import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ApresTirageComponent } from './apres-tirage/apres-tirage.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { ImporterComponent } from './importer/importer.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [

  {
    path:"liste",
    component:ListePostulantComponent
  },

  {
    path:"apres_tirage/:libtirage",
    component:ApresTirageComponent
  },
  {
    path:"importer",
    component:ImporterComponent
  },
  {
    path:"detailliste/:id",
    component:DetailsListeComponent
  },
  {
    path:"detailtirage/:id",
component:DetailsTirageComponent
  },
  {
    path:"",
    redirectTo:"acceuil",
    pathMatch:'full'
  },
  {
    path:"acceuil",
    component:AccueilComponent
  },
  {
    path:"detailtirage",
    component:DetailsTirageComponent
  },
  {
    path:"tirage",
    component:TirageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
