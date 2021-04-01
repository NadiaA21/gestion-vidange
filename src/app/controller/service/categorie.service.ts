import {Injectable} from '@angular/core';
import {Categorie} from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  // tslint:disable-next-line:new-parens variable-name
  private _categorie: Categorie = new Categorie;

  // tslint:disable-next-line:variable-name
  private _categories: Array<Categorie> = [];
  // tslint:disable-next-line:variable-name
  _index = 0;

  // tslint:disable-next-line:typedef
  public update(index: number, categorie: Categorie) {
    this.categorie = this.clone(categorie);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public save() {
    if (this.categorie.id == null) {
      this.categorie.id = this.categories.length + 1;
      this.categories.push(this.clone(this.categorie));
    } else {
      this.categories[this._index] = this.clone(this.categorie);
    }
    // @ts-ignore
    this.categorie = null;
  }

  constructor() {
  }

  // tslint:disable-next-line:typedef
  public init() {
    // tslint:disable-next-line:variable-name
    for (var _i = 1; _i <= 4; _i++) {
      let myCategorie = new Categorie();
      myCategorie.id = _i;
      myCategorie.reference = 'c-' + _i;
      myCategorie.nom = 'client' + _i;
      myCategorie.libelle = 'libelle' + _i;
      this.categories.push(myCategorie);


    }
  }

  get categorie(): Categorie {
    if (this._categorie == null) {
      this._categorie = new Categorie();
    }
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get categories(): Array<Categorie> {
    if (this._categories == null) {
      this._categories = new Array<Categorie>();
    }
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }


  // tslint:disable-next-line:typedef
  private clone(categorie: Categorie) {
    let myClone = new Categorie();
    myClone.id = categorie.id;
    myClone.reference = categorie.reference;
    myClone.nom = categorie.nom;
    myClone.libelle = categorie.libelle;

    return myClone;
  }


}
