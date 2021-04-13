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
  constructor(private consommationcarburantService: ConsommationcarburantService) {
  }

  ngOnInit(): void {
  }

}
