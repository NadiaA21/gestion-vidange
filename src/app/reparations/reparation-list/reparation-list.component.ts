import { Component, OnInit } from '@angular/core';
import {ReparationService} from '../../controller/service/reparation.service';
import {Reparation} from '../../controller/model/reparation.model';

@Component({
  selector: 'app-reparation-list',
  templateUrl: './reparation-list.component.html',
  styleUrls: ['./reparation-list.component.css']
})
export class ReparationListComponent implements OnInit {

  public delete(index: number) {
    this.reparations.splice(index, 1);

  }

  public update(index: number, reparation: Reparation) {
    this.reparationService.update(index, reparation);

  }

  get reparations(): Array<Reparation> {
    return this.reparationService.reparations;
  }

  constructor(private reparationService: ReparationService) {
  }

  ngOnInit(): void {
    this.reparationService.init();
  }

}

