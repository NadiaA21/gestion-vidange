import { Injectable } from '@angular/core';
import {Reparation} from '../model/reparation.model';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  private _reparation: Reparation;
  private _reparations : Array<Reparation>;
  private _index: number;

  public update(index: number, reparation: Reparation) {
    this.reparation = this.clone(reparation);
    this._index = index;
  }
  public save() {
    if (this.reparation.id == null) {
      this.reparation.id = this.reparations.length + 1;
      this.reparations.push(this.clone(this.reparation));
    } else{
      this.reparations[this._index] = this.clone(this.reparation);
    }
    this.reparation = null;
  }

  public init() {
    // tslint:disable-next-line:variable-name
    for (var _i = 1; _i <= 4; _i++) {
      let myReparation = new Reparation();
      myReparation.id = _i;
      myReparation.ref = 'c-' + _i;
      myReparation.description = 'd' + _i;
      myReparation.montant =  + _i;
      myReparation.datereparation = '2020' + _i;
      this.reparations.push(myReparation);


    }
  }

  get reparation(): Reparation {
    if (this._reparation == null) {
      this._reparation = new Reparation();
    }
    return this._reparation;
  }

  set reparation(value: Reparation) {
    this._reparation = value;
  }

  get reparations(): Array<Reparation> {
    if (this._reparations == null) {
      this._reparations = new Array<Reparation>();
    }
    return this._reparations;
  }

  set reparations(value: Array<Reparation>) {
    this._reparations = value;
  }
  private clone(reparation: Reparation) {
    let myClone = new Reparation();
    myClone.id = reparation.id;
    myClone.ref = reparation.ref;
    myClone.description = reparation.description;
    myClone.montant = reparation.montant;
    myClone.datereparation = reparation.datereparation;

    return myClone;
  }

  constructor() { }
}
