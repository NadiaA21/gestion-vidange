import { Component, OnInit } from '@angular/core';
import {Vidange} from '../../controller/model/vidange.model';
import {Voiture} from '../../controller/model/voiture.model';
import {VoitureService} from '../../controller/service/voiture.service';
import {VidangeService} from '../../controller/service/vidange.service';

@Component({
  selector: 'app-vidange-create',
  templateUrl: './vidange-create.component.html',
  styleUrls: ['./vidange-create.component.css']
})
export class VidangeCreateComponent implements OnInit {

  constructor(private vidangeService: VidangeService) {
  }
  public save(){
   return this.vidangeService.save();
  }
  get vidange(): Vidange {
    return this.vidangeService.vidange;
  }
  ngOnInit(): void {
  }
}

