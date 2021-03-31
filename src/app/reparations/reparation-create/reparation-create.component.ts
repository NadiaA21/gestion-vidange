import { Component, OnInit } from '@angular/core';
import {Reparation} from '../../controller/model/reparation.model';
import {ReparationService} from '../../controller/service/reparation.service';

@Component({
  selector: 'app-reparation-create',
  templateUrl: './reparation-create.component.html',
  styleUrls: ['./reparation-create.component.css']
})
export class ReparationCreateComponent implements OnInit {
  constructor(private reparationService: ReparationService) { }
  public save(){
    this.reparationService.save();
  }
  get reparation(): Reparation {
    return this.reparationService.reparation;
  }

  ngOnInit(): void {
  }

}
