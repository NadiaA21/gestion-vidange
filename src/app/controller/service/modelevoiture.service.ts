import { Injectable } from '@angular/core';
import {Modelevoiture} from '../model/modelevoiture.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelevoitureService {
  private urlBase = 'http://localhost:8036';
  private url = '/modele/modele';
  private _modelevoiture: Modelevoiture = new Modelevoiture();
  private _modelevoitures: Array<Modelevoiture> = [];
  // tslint:disable-next-line:variable-name
   _index = 0;

  public update(index: number, modelevoiture: Modelevoiture) {
    this.modelevoiture = this.clone(modelevoiture);
    this._index = index;
  }
  public save(){
    if (this.modelevoiture.id == null){
      this.http.post(this.urlBase + this.url + '/', this.modelevoiture).subscribe(
        data => {
          if (data == -1) {
            alert('Modele de voiture existe deja !' + data);
          }else if (data == 1){
            this.modelevoitures.push(this.clone(this.modelevoiture));
            this.findAll();
          }
        }
      );

    }
    else{
      this.http.post(this.urlBase + this.url + '/', this.modelevoiture).subscribe(

          DATA => { this.modelevoitures[this._index] = this.clone(this.modelevoiture);
                    this.findAll();
    });
    }

    // @ts-ignore
    this.modelevoiture = null;
  }

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Modelevoiture>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.modelevoitures = data;
      } , error => {
        alert('error' + error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.http.get<Array<Modelevoiture>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.modelevoitures.splice(index, 1);
        this.findAll();
      } , error => {
        alert('error' + error);
      }
    );
  }

  get modelevoiture(): Modelevoiture {
    if (this._modelevoiture == null){
      this._modelevoiture = new Modelevoiture();
    }
    return this._modelevoiture;
  }

  set modelevoiture(value: Modelevoiture) {
    this._modelevoiture = value;
  }

  get modelevoitures(): Array<Modelevoiture> {
    if (this._modelevoitures == null){
      this._modelevoitures = [];
    }
    return this._modelevoitures;
  }

  set modelevoitures(value: Array<Modelevoiture>) {
    this._modelevoitures = value;
  }
  // tslint:disable-next-line:typedef
  private clone(modelevoiture: Modelevoiture) {
    let myClone = new Modelevoiture();
    myClone.id = modelevoiture.id;
    myClone.code = modelevoiture.code;
    myClone.marque = modelevoiture.marque;
    myClone.libelle = modelevoiture.libelle;
    return myClone;
}}
