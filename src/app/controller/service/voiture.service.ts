import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private urlBase = 'http://localhost:8036';
  private url = '/voiture/voiture';
  private _voiture: Voiture = new Voiture();
  private _voitures: Array<Voiture> = [];
  // tslint:disable-next-line:variable-name
  _index = 0;

  public update(index: number, voiture: Voiture) {
    this.voiture = this.clone(voiture);
    this._index = index;
  }
  public save(){
    if (this.voiture.id == null){
      this.http.post(this.urlBase + this.url + '/', this.voiture).subscribe(
        data => {
          alert('data');
          if (data == -1) {
            alert(' voiture existe deja !' + data);
          }else if (data == -2){
            alert(-2);
          }else if (data == -3){
            alert(-3);
          } else if (data == 1){
            this.voitures.push(this.clone(this.voiture));
            this.findAll();
          }
        }
      );

    }
    else{
      alert(-222);
      this.http.post(this.urlBase + this.url + '/', this.voiture).subscribe(

        DATA => { this.voitures[this._index] = this.clone(this.voiture);
                  this.findAll();
        });
    }

    // @ts-ignore
    this.voiture = null;
  }

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Voiture>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.voitures = data;
      } , error => {
        alert('error' + error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.http.get<Array<Voiture>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.voitures.splice(index, 1);
        this.findAll();
      } , error => {
        alert('error' + error);
      }
    );
  }

  get voitures(): Array<Voiture> {
    if (this._voiture == null){
      this._voiture = new Voiture();
    }
    return this._voitures;
  }

  set voitures(value: Array<Voiture>) {
    this._voitures = value;
  }

  get voiture(): Voiture {
    if (this._voitures == null){
      this._voitures =  new Array<Voiture>();
    }
    return this._voiture;
  }

  set voiture(value: Voiture) {
    this._voiture = value;
  }
  // tslint:disable-next-line:typedef
  private clone(voiture: Voiture) {
    let myClone = new Voiture();
    myClone.id = voiture.id;
    myClone.ref = voiture.ref;
    myClone.matricule = voiture.matricule;
    myClone.typeCarburant.code = voiture.typeCarburant.code;
    myClone.dateDernierVidange = voiture.dateDernierVidange;
    myClone.consommationCarburant = voiture.consommationCarburant;
    myClone.model.code = voiture.model.code;

    return myClone;
  }
}
