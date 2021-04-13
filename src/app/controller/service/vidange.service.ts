import {Injectable} from '@angular/core';
import {Vidange} from '../model/vidange.model';
import {Voiture} from '../model/voiture.model';
import {HttpClient} from '@angular/common/http';
import {Consommationcarburant} from '../model/consommationcarburant.model';

@Injectable({
  providedIn: 'root'
})
export class VidangeService {
  private urlBase = 'http://localhost:8090';
  private url = '/vidange/vidange';
  // tslint:disable-next-line:new-parens variable-name
  private _vidange: Vidange = new Vidange;

  // tslint:disable-next-line:variable-name
  private _vidanges: Array<Vidange> = [];
  // tslint:disable-next-line:variable-name
  _index = 0;
  // private voitureService: VoitureService = new VoitureService(this.http);

  // tslint:disable-next-line:typedef
  public update(index: number, vidange: Vidange) {
    this.vidange = this.clone(vidange);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save() {
    if (this.vidange.id == null) {
      this.http.post<number>(this.urlBase + this.url + '/', this.vidange).subscribe(
        data => {
          alert(data);
          if (data == -1) {
            alert('vidange existe deja !' + data);
          } else if (data == 1) {
            this.vidanges.push(this.clone(this.vidange));
            this.findAll();
          }
          alert('no ss' + data);
        });
    } else {
      this.http.post<number>(this.urlBase + this.url + '/', this.vidange).subscribe(
        data => {
          this.vidanges[this._index] = this.clone(this.vidange);
          this.findAll();
        });
    }
    // @ts-ignore
    this.vidange = null;
  }

  constructor(private http: HttpClient) {
  }


  public findAll() {
    this.http.get<Array<Vidange>>(this.urlBase + this.url + '/').subscribe(
      data => {
        console.log(data);
        this.vidanges = data;
      }, error => {
        alert('error in find All');
      }
    );
  }

  // tslint:disable-next-line:typedef
  public findByVoitureRef(voiture: Voiture) {
    this.http.get <Array<Vidange>>(this.urlBase + this.url + '/voitureref/' + voiture.ref).subscribe(
      data => {
        this.vidanges = data;
      }, error => {
        console.log(error);
      }
    );
  }

  get vidange(): Vidange {
    if (this._vidange == null) {
      this._vidange = new Vidange();
    }
    return this._vidange;
  }

  set vidange(value: Vidange) {
    this._vidange = value;
  }

  get vidanges(): Array<Vidange> {
    if (this._vidanges == null) {
      this._vidanges = new Array<Vidange>();
    }
    return this._vidanges;
  }

  set vidanges(value: Array<Vidange>) {
    this._vidanges = value;
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(vidange1: Vidange) {
    this.http.delete<Array<Vidange>>(this.urlBase + this.url + '/ref/' + vidange1.ref).subscribe(
      data => {
        this.deleteByRef(vidange1);
        this.findAll();
      }, error => {
        alert('error' + error);
        console.log(this.http.delete<Array<Vidange>>(this.urlBase + this.url + '/ref/' + vidange1.ref));
      }
    );
  }

  // tslint:disable-next-line:typedef
  clone(vidange: Vidange) {
    let myClone = new Vidange();
    myClone.id = vidange.id;
    myClone.ref = vidange.ref;
    myClone.dateVidange = vidange.dateVidange;
    myClone.kilomtrageActuel = vidange.kilomtrageActuel;
    myClone.kilometrageVidangeSuivant = vidange.kilometrageVidangeSuivant;
    myClone.montant = vidange.montant;
    myClone.voiture = vidange.voiture;
    return myClone;
  }
}
