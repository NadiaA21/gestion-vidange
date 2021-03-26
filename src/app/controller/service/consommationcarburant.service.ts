import { Injectable } from '@angular/core';
import {Consommationcarburant} from '../model/consommationcarburant.model';

@Injectable({
  providedIn: 'root'
})
export class ConsommationcarburantService {

  // tslint:disable-next-line:new-parens variable-name
  private _consommationcarburant: Consommationcarburant = new Consommationcarburant;

  // tslint:disable-next-line:variable-name
  private _consommationcarburants: Array<Consommationcarburant> = [];
  // tslint:disable-next-line:variable-name
  _index = 0;
  public update(index: number, consommation: Consommationcarburant) {
    this.consommationcarburant = this.clone(consommation);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save(){
    if(this.consommationcarburant.id == null){
      this.consommationcarburant.id = this.consommationcarburants.length + 1;
      this.consommationcarburants.push(this.clone(this.consommationcarburant));
    }
    else{
      this.consommationcarburants[this._index] = this.clone(this.consommationcarburant);
    }
    // @ts-ignore
    this.consommationcarburant = null;
  }

  constructor() { }


  get consommationcarburant(): Consommationcarburant {
    if (this._consommationcarburant == null){
      this._consommationcarburant = new Consommationcarburant();
    }
    return this._consommationcarburant;
  }

  set consommationcarburant(value: Consommationcarburant) {
    this._consommationcarburant = value;
  }

  get consommationcarburants(): Array<Consommationcarburant> {
    if (this._consommationcarburants == null){
      this._consommationcarburants = new Array<Consommationcarburant>();
    }
    return this._consommationcarburants;
  }

  set consommationcarburants(value: Array<Consommationcarburant>) {
    this._consommationcarburants = value;
  }

  // tslint:disable-next-line:typedef
  public init(){
    for (let _i = 1; _i <= 4; _i++){
      let myConsommation = new Consommationcarburant();
      myConsommation.id = _i;
      myConsommation.ref = 'c-' + _i;
      myConsommation.annee = 2016 + _i;
      myConsommation.description = 'description' + _i;
      myConsommation.litre = 100 * _i;
      myConsommation.numeroSemaine = 10 + _i;
      myConsommation.prix = 100 * _i;
      myConsommation.mois = 5 + _i;
      myConsommation.dateConsommation = 2010 + _i;
      this.consommationcarburants.push(myConsommation);
    }
  }

  private clone(consommationcarburant: Consommationcarburant) {
    let myClone = new Consommationcarburant();
    myClone.id = consommationcarburant.id;
    myClone.dateConsommation = consommationcarburant.dateConsommation;
    myClone.mois = consommationcarburant.mois;
    myClone.prix = consommationcarburant.prix;
    myClone.numeroSemaine = consommationcarburant.numeroSemaine;
    myClone.litre = consommationcarburant.litre;
    myClone.description = consommationcarburant.description;
    myClone.annee = consommationcarburant.annee;
    myClone.ref = consommationcarburant.ref;
    return myClone;
  }


}
