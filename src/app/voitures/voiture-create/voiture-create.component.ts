import { Component, OnInit } from '@angular/core';

import {VoitureService} from '../../controller/service/voiture.service';
import {Voiture} from '../../controller/model/voiture.model';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {Vidange} from '../../controller/model/vidange.model';


@Component({
  selector: 'app-voiture-create',
  templateUrl: './voiture-create.component.html',
  styleUrls: ['./voiture-create.component.css']
})
export class VoitureCreateComponent implements OnInit {

  private getRef: string =  String();


  constructor(private voitureService: VoitureService) { }

  get voiture(): Voiture {
    return this.voitureService.voiture;
  }

  public save(){
    this.voitureService.save();
  }
  public  getValue(): string {
    this.getRef = ((document.getElementById('cccc45') as HTMLInputElement).value);
    return (this.getRef);
  }

  get vidange(): Vidange {
    return  this.voitureService.vidangeService.vidange;
  }
  public addVidange(){
    this.vidange.voiture.ref = this.getRef;
    this.voitureService.vidangeService.save();
  }
  ngOnInit(): void {
  }
}
