import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConsommationcarburantsComponent} from './consommationcarburants/consommationcarburants.component';
import {ConsommationcarburantCreateComponent} from './consommationcarburants/consommationcarburant-create/consommationcarburant-create.component';
import {ConsommationcarburantListComponent} from './consommationcarburants/consommationcarburant-list/consommationcarburant-list.component';
import {FormsModule} from '@angular/forms';
import { ModelevoituresComponent } from './modelevoitures/modelevoitures.component';
import { ModelevoitureCreateComponent } from './modelevoitures/modelevoiture-create/modelevoiture-create.component';
import { ModelevoitureListComponent } from './modelevoitures/modelevoiture-list/modelevoiture-list.component';
import { VoituresComponent } from './voitures/voitures.component';
import { VoitureCreateComponent } from './voitures/voiture-create/voiture-create.component';
import { VoitureListComponent } from './voitures/voiture-list/voiture-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieCreateComponent } from './categories/categorie-create/categorie-create.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { ReparationsComponent } from './reparations/reparations.component';
import { ReparationCreateComponent } from './reparations/reparation-create/reparation-create.component';
import { ReparationListComponent } from './reparations/reparation-list/reparation-list.component';
import { TypecarburantsComponent } from './typecarburants/typecarburants.component';
import { TypecarburantCreateComponent } from './typecarburants/typecarburant-create/typecarburant-create.component';
import { TypecarburantListComponent } from './typecarburants/typecarburant-list/typecarburant-list.component';
import { VidangesComponent } from './vidanges/vidanges.component';
import { VidangeCreateComponent } from './vidanges/vidange-create/vidange-create.component';
import { VidangeListComponent } from './vidanges/vidange-list/vidange-list.component';
import { TypevidangesComponent } from './typevidanges/typevidanges.component';
import { TypevidangeCreateComponent } from './typevidanges/typevidange-create/typevidange-create.component';
import { TypevidangeListComponent } from './typevidanges/typevidange-list/typevidange-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsommationcarburantsComponent,
    ConsommationcarburantCreateComponent,
    ConsommationcarburantListComponent,
    ModelevoituresComponent,
    ModelevoitureCreateComponent,
    ModelevoitureListComponent,
    VoituresComponent,
    VoitureCreateComponent,
    VoitureListComponent,
    CategoriesComponent,
    CategorieCreateComponent,
    CategorieListComponent,
    ReparationsComponent,
    ReparationCreateComponent,
    ReparationListComponent,
    TypecarburantsComponent,
    TypecarburantCreateComponent,
    TypecarburantListComponent,
    VidangesComponent,
    VidangeCreateComponent,
    VidangeListComponent,
    TypevidangesComponent,
    TypevidangeCreateComponent,
    TypevidangeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
