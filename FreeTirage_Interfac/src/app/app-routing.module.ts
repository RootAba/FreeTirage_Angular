import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [

  {
    path:"liste",
    component:ListePostulantComponent
  },
  {
    path:"detailliste/:id",
    component:DetailsListeComponent
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
