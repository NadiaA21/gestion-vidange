import { Component, OnInit } from '@angular/core';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';
import {Modelevoiture} from '../../controller/model/modelevoiture.model';
import {ModelevoitureService} from '../../controller/service/modelevoiture.service';

@Component({
  selector: 'app-modelevoiture-list',
  templateUrl: './modelevoiture-list.component.html',
  styleUrls: ['./modelevoiture-list.component.css']
})
export class ModelevoitureListComponent implements OnInit {

  get modelevoitures(): Array<Modelevoiture> {
    return this.modelevoitureService.modelevoitures;
  }

  constructor(private modelevoitureService: ModelevoitureService) {
  }
  public delete(index: number){
    this.modelevoitureService.delete(index);
  }
  public update(index: number, modelevoiture: Modelevoiture){
    this.modelevoitureService.update(index, modelevoiture);
  }

  ngOnInit(): void {
    this.modelevoitureService.findAll();
  }

}
