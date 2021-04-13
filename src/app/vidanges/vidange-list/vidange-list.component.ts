import { Component, OnInit } from '@angular/core';
import {Vidange} from '../../controller/model/vidange.model';
import {VidangeService} from '../../controller/service/vidange.service';
import {Consommationcarburant} from '../../controller/model/consommationcarburant.model';
import {Voiture} from '../../controller/model/voiture.model';

@Component({
  selector: 'app-vidange-list',
  templateUrl: './vidange-list.component.html',
  styleUrls: ['./vidange-list.component.css']
})
export class VidangeListComponent implements OnInit {
  // @ts-ignore
  private voiture: Voiture;
  constructor(private vidangeService: VidangeService) { }

  ngOnInit(): void {
    this.vidangeService.findAll();
  }
  public deleteByRef(vidange1: Vidange){
    this.vidangeService.deleteByRef(vidange1);
  }
  public update(index: number, vidange: Vidange){
    this.vidangeService.update(index, vidange);
  }
  get vidanges(): Array<Vidange> {
    return this.vidangeService.vidanges;
  }

}
