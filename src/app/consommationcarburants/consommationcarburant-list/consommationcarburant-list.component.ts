import {Component, OnInit} from '@angular/core';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {ConsommationcarburantService} from '../../controller/service/consommationcarburant.service';

@Component({
  selector: 'app-consommationcarburant-list',
  templateUrl: './consommationcarburant-list.component.html',
  styleUrls: ['./consommationcarburant-list.component.css']
})
export class ConsommationcarburantListComponent implements OnInit {

  get consommationcarburants(): Array<Consommationcarburant> {
    return this.consommationcarburantService.consommationcarburants;
  }

  constructor(private consommationcarburantService: ConsommationcarburantService) {
  }
  public delete(index: number){
    this.consommationcarburants.splice(index, 1);
  }
  public update(index: number, consommation: Consommationcarburant){
    this.consommationcarburantService.update(index, consommation);
  }

  ngOnInit(): void {
    this.consommationcarburantService.findAll();
  }

}
