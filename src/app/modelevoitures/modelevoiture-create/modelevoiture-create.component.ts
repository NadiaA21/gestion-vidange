import {Component, OnInit} from '@angular/core';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {ModelevoitureService} from '../../controller/service/modelevoiture.service';
import {Modelevoiture} from '../../controller/model/modelevoiture.model';

@Component({
  selector: 'app-modelevoiture-create',
  templateUrl: './modelevoiture-create.component.html',
  styleUrls: ['./modelevoiture-create.component.css']
})
export class ModelevoitureCreateComponent implements OnInit {

  constructor(private modelevoitureService: ModelevoitureService) { }

  get modelevoiture(): Modelevoiture {

    return this.modelevoitureService.modelevoiture;
  }

  public save(){
    this.modelevoitureService.save();
  }
  ngOnInit(): void {
  }

}
