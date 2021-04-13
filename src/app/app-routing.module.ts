import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Voiture} from './controller/model/voiture.model';
import {VoitureListComponent} from './voitures/voiture-list/voiture-list.component';
import {VoituresComponent} from './voitures/voitures.component';
import {VoitureCreateComponent} from './voitures/voiture-create/voiture-create.component';
import {ConsommationcarburantCreateComponent} from './consommationcarburants/consommationcarburant-create/consommationcarburant-create.component';
import {ConsommationcarburantListComponent} from './consommationcarburants/consommationcarburant-list/consommationcarburant-list.component';
import {PageNotFoundedComponent} from './page-not-founded/page-not-founded.component';
import {VidangeCreateComponent} from './vidanges/vidange-create/vidange-create.component';
import {VidangeListComponent} from './vidanges/vidange-list/vidange-list.component';

// tslint:disable-next-line:max-line-length
export const components = [VoitureCreateComponent, VoitureListComponent, VidangeCreateComponent, VidangeListComponent];

const routes: Routes = [
  {path: '' , component : components[0]},
  {path: 'voiture-create' , component : components[0]},
  {path: 'voiture-list' , component : components[1]},
  {path: 'vidange-create' , component : components[2]},
  {path: 'vidange-list' , component : components[3]},
  {path: '**' , component : PageNotFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
