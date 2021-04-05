import { Component, OnInit } from '@angular/core';
import {Modelevoiture} from '../../controller/model/modelevoiture.model';
import {ModelevoitureService} from '../../controller/service/modelevoiture.service';
import {Voiture} from '../../controller/model/voiture.model';
import {VoitureService} from '../../controller/service/voiture.service';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
   // @ts-ignore
  idVoiture: number;

  get voitures(): Array<Voiture> {
    return this.voitureService.voitures;
  }

  constructor(private voitureService: VoitureService) {

  }
  // @ts-ignore
  num1: string;
  get consommationcarburants(): Array<Consommationcarburant> {
    return this.voitureService.consommationcarburantService.consommationcarburants;
  }

  public deleteByRef(voitur: Voiture){
    // voitur = this.voiture;
    this.voitureService.deleteByRef(voitur);
  }
  public update(index: number, voiture: Voiture){
    this.voitureService.update(index, voiture);
  }
  get voiture(): Voiture {
    return this.voitureService.voiture;
  }

  ngOnInit(): void {
    this.voitureService.findAll();
  }
  public  getValue() {
     this.num1 = ((document.getElementById('cccc45') as HTMLInputElement).value);
     return Number(this.num1);
  }

  findByVoitureId(voitur: Voiture) {
    voitur = this.voiture;
    this.voitureService.consommationcarburantService.findByVoitureId(voitur);
  }

  // tslint:disable-next-line:typedef
  updateconsommation(i: number, c2: Consommationcarburant) {
    this.voitureService.consommationcarburantService.update(i, c2);
  }
}
