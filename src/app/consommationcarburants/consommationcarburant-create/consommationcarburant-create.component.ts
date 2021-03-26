import { Component, OnInit } from '@angular/core';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';

@Component({
  selector: 'app-consommationcarburant-create',
  templateUrl: './consommationcarburant-create.component.html',
  styleUrls: ['./consommationcarburant-create.component.css']
})
export class ConsommationcarburantCreateComponent implements OnInit {

  constructor(private consommationcarburantService: ConsommationcarburantService) { }

  get consommationcarburant(): Consommationcarburant {

    return this.consommationcarburantService.consommationcarburant;
  }

  public save(){
    this.consommationcarburantService.save();
  }

  ngOnInit(): void {
  }

}
