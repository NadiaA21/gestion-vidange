import {Component, OnInit} from '@angular/core';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';
import {Voiture} from '../../controller/model/voiture.model';

@Component({
  selector: 'app-consommationcarburant-list',
  templateUrl: './consommationcarburant-list.component.html',
  styleUrls: ['./consommationcarburant-list.component.css']
})
export class ConsommationcarburantListComponent implements OnInit {
  // @ts-ignore
  private voiture: Voiture;

  get consommationcarburants(): Array<Consommationcarburant> {
    return this.consommationcarburantService.consommationcarburants;
  }

  constructor(private consommationcarburantService: ConsommationcarburantService) {
  }
  public deleteByRef(consommation: Consommationcarburant){
    this.consommationcarburantService.deleteByRef(consommation);
  }
  public update(index: number, consommation: Consommationcarburant){
    this.consommationcarburantService.update(index, consommation);
  }

  ngOnInit(): void {
    this.consommationcarburantService.findAll();
  }

}
