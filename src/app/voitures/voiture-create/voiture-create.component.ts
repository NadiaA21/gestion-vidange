import { Component, OnInit } from '@angular/core';
import {ModelevoitureService} from '../../controller/service/modelevoiture.service';
import {Modelevoiture} from '../../controller/model/modelevoiture.model';
import {VoitureService} from '../../controller/service/voiture.service';
import {Voiture} from '../../controller/model/voiture.model';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';

@Component({
  selector: 'app-voiture-create',
  templateUrl: './voiture-create.component.html',
  styleUrls: ['./voiture-create.component.css']
})
export class VoitureCreateComponent implements OnInit {


  constructor(private voitureService: VoitureService) { }

  get voiture(): Voiture {
    return this.voitureService.voiture;
  }
  // @ts-ignore
  public consommationcarburantService: ConsommationcarburantService = new ConsommationcarburantService();

  public save(){
    this.voitureService.save();
  }

  ngOnInit(): void {
  }

}
