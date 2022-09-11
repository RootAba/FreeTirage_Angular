import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MonHeaderComponent } from './mon-header/mon-header.component';
import {MatMenuModule} from '@angular/material/menu';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { TirageComponent } from './tirage/tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BarChartComponent } from './bar-chart/bar-chart.component'
import { NgChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonHeaderComponent,
    DetailsListeComponent,
    DetailsTirageComponent,
    TirageComponent,
    AccueilComponent,
    BarChartComponent,
    ListePostulantComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
