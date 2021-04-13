import { Component, OnInit } from '@angular/core';
import {Voiture} from '../../controller/model/voiture.model';
import {VoitureService} from '../../controller/service/voiture.service';
import {Vidange} from '../../controller/model/vidange.model';


@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
   // @ts-ignore
  idVoiture: number;

  get voitures(): Array<Voiture> {
    return this.voitureService.voitures;
  }

  constructor(private voitureService: VoitureService) {

  }
  // @ts-ignore
  num1: string;
  get vidanges(): Array<Vidange> {
    return this.voitureService.vidangeService.vidanges;
  }

  public deleteByRef(voitur: Voiture){
    // voitur = this.voiture;
    this.voitureService.deleteByRef(voitur);
  }
  public update(index: number, voiture: Voiture){
    this.voitureService.update(index, voiture);
  }
  get voiture(): Voiture {
    return this.voitureService.voiture;
  }

  ngOnInit(): void {
    this.voitureService.findAll();
  }
  public  getValue() {
     this.num1 = ((document.getElementById('cccc45') as HTMLInputElement).value);
     return Number(this.num1);
  }
  // tslint:disable-next-line:typedef
  findByVoitureRef(voitur1: Voiture) {
    this.voitureService.vidangeService.findByVoitureRef(voitur1);
  }

  // tslint:disable-next-line:typedef
  updatevidange(i: number, c2: Vidange) {
    this.voitureService.vidangeService.update(i, c2);
  }
}
