import { Component, OnInit } from '@angular/core';
import {Modelevoiture} from '../../controller/model/modelevoiture.model';
import {ModelevoitureService} from '../../controller/service/modelevoiture.service';
import {Voiture} from '../../controller/model/voiture.model';
import {VoitureService} from '../../controller/service/voiture.service';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
   serverName = 0;

  get voitures(): Array<Voiture> {
    return this.voitureService.voitures;
  }

  constructor(private voitureService: VoitureService) {

  }
  // @ts-ignore
  num1: string;
  // @ts-ignore
  public consommationcarburantService: ConsommationcarburantService = new ConsommationcarburantService();

  public delete(index: number){
    this.voitureService.delete(index);
  }
  public update(index: number, voiture: Voiture){
    this.voitureService.update(index, voiture);
  }

  ngOnInit(): void {
    this.voitureService.findAll();
  }
  public  getValue() {
     this.num1 = ((document.getElementById('cccc45') as HTMLInputElement).value);
     return Number(this.num1);
  }
}
