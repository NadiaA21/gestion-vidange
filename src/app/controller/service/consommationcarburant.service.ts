import { Injectable } from '@angular/core';
import {Consommationcarburant} from '../model/consommationcarburant.model';
import {HttpClient} from '@angular/common/http';
import {Modelevoiture} from '../model/modelevoiture.model';

@Injectable({
  providedIn: 'root'
})
export class ConsommationcarburantService {
  private urlBase = 'http://localhost:8036';
  private url = '/consommationCarburant/consommationCarburant';
  // tslint:disable-next-line:new-parens variable-name
  private _consommationcarburant: Consommationcarburant = new Consommationcarburant;

  // tslint:disable-next-line:variable-name
  private _consommationcarburants: Array<Consommationcarburant> = [];
  // tslint:disable-next-line:variable-name
  _index = 0;
  // tslint:disable-next-line:typedef
  public update(index: number, consommation: Consommationcarburant) {
    this.consommationcarburant = this.clone(consommation);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save(){
    alert('in save');
    if (this.consommationcarburant.id == null){
       alert('id=null');
       this.http.post(this.urlBase + this.url + '/', this.consommationcarburant).subscribe(
        data => {
          if (data == -1){
            alert('consommation existe deja !' + data);
          }else if (data == 1) {
             this.consommationcarburants.push(this.clone(this.consommationcarburant));
             this.findAll();
          }
        });
    } else{
      alert('id != null');
      this.http.post(this.urlBase + this.url + '/', this.consommationcarburant).subscribe(
        data => {
      this.consommationcarburants[this._index] = this.clone(this.consommationcarburant);
      this.findAll();
        });
    }
    // // @ts-ignore
    // this.consommationcarburant = null;
  }

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Consommationcarburant>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.consommationcarburants = data;
      } , error => {
        alert('error');
    }
    );
  }
  // tslint:disable-next-line:typedef
  public findByVoitureId(id: number){
    this.http.get <Array<Consommationcarburant>>(this.urlBase + this.url + '/idvoiture/idvoiture').subscribe(
      data => {
        console.log(data);
        this.consommationcarburants = data;
      } , error => {
        console.log( error);
      }
    );
  }


  // tslint:disable-next-line:typedef
  public findByVoitureRef(ref: string){
    alert(ref);
    this.http.get<Array<Consommationcarburant>>(this.urlBase + this.url + '/VoitureRef/VoitureRef').subscribe(
      data => {
        this.consommationcarburants = data;
      } , error => {
        console.log( error);
      }
    );
  }

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
  public delete(index: number){
    this.http.get<Array<Consommationcarburant>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.consommationcarburants.splice(index, 1);
        this.findAll();
      } , error => {
        alert('error' + error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  private clone(consommationcarburant: Consommationcarburant) {
    let myClone = new Consommationcarburant();
    myClone.id = consommationcarburant.id;
    myClone.dateConsommationCarburant = consommationcarburant.dateConsommationCarburant;
    myClone.mois = consommationcarburant.mois;
    myClone.prix = consommationcarburant.prix;
    myClone.numeroSemaine = consommationcarburant.numeroSemaine;
    myClone.litre = consommationcarburant.litre;
    myClone.description = consommationcarburant.description;
    myClone.annee = consommationcarburant.annee;
    myClone.ref = consommationcarburant.ref;
    myClone.voiture = consommationcarburant.voiture;
    return myClone;
  }


}
