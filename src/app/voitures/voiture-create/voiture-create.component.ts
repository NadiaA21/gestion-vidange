import { Component, OnInit } from '@angular/core';

import {VoitureService} from '../../controller/service/voiture.service';
import {Voiture} from '../../controller/model/voiture.model';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';


@Component({
  selector: 'app-voiture-create',
  templateUrl: './voiture-create.component.html',
  styleUrls: ['./voiture-create.component.css']
})
export class VoitureCreateComponent implements OnInit {
  // @ts-ignore
  private num1: string;
  private getRef: string =  String();


  constructor(private voitureService: VoitureService) { }

  get voiture(): Voiture {
    return this.voitureService.voiture;
  }

  public save(){
    this.voitureService.save();
  }
  public  getValue(): string {
    this.num1 = ((document.getElementById('cccc45') as HTMLInputElement).value);
    return (this.num1);
  }

  get consommationcarburant(): Consommationcarburant {
    return  this.voitureService.consommationcarburantService.consommationcarburant;
  }
  public addConsommation(){
    this.consommationcarburant.voiture.ref = this.getValue();
    this.voitureService.consommationcarburantService.save();
  }

  ngOnInit(): void {
  }
}
