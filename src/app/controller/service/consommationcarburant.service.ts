import { Injectable } from '@angular/core';
import {Consommationcarburant} from '../model/consommationcarburant.model';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';
import {VoitureService} from './voiture.service';

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
  // private voitureService: VoitureService = new VoitureService(this.http);

  // tslint:disable-next-line:typedef
  public update(index: number, consommation: Consommationcarburant) {
    this.consommationcarburant = this.clone(consommation);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save(){
    if (this.consommationcarburant.id == null){
       this.http.post<number>(this.urlBase + this.url + '/', this.consommationcarburant).subscribe(
        data => {
          if (data == -1){
            alert('consommation existe deja !' + data);
          }else if (data == 1) {
            this.consommationcarburants.push(this.clone(this.consommationcarburant));
            this.findAll();
          }else if (data == 0){
            alert('data = 0');
          }
        });
    } else{
      this.http.post<number>(this.urlBase + this.url + '/', this.consommationcarburant).subscribe(
        data => {
      this.consommationcarburants[this._index] = this.clone(this.consommationcarburant);
      this.findAll();
        });
    }
    // // @ts-ignore
    // this.consommationcarburant = null;
  }

  constructor(private http: HttpClient) { }


  public findAll(){
    this.http.get<Array<Consommationcarburant>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.consommationcarburants = data;
      } , error => {
        alert('error in find All');
    }
    );
  }
  // tslint:disable-next-line:typedef
  public findByVoitureId(voiture: Voiture){
    this.http.get <Array<Consommationcarburant>>(this.urlBase + this.url + '/idvoiture/ ' + voiture.id).subscribe(
      data => {
        console.log(voiture);
        this.consommationcarburants = data;
      } , error => {}
    );
  }
  // tslint:disable-next-line:typedef
  public findByVoitureRef(voiture: Voiture){
    this.http.get <Array<Consommationcarburant>>(this.urlBase + this.url + '/refvoiture/ ' + voiture.ref).subscribe(
      data => {
        this.consommationcarburants = data;
      } , error => {console.log(error); }
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
  public deleteByRef(consommation: Consommationcarburant){
    this.http.delete<Array<Consommationcarburant>>(this.urlBase + this.url + '/ref/' + consommation.ref).subscribe(
      data => {
        this.deleteByRef(consommation);
        this.findAll();
      } , error => {
        alert('error' + error);
        console.log(this.http.delete<Array<Consommationcarburant>>(this.urlBase + this.url + '/ref/' + consommation.ref));
      }
    );
  }

  // tslint:disable-next-line:typedef
  clone(consommationcarburant: Consommationcarburant) {
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
