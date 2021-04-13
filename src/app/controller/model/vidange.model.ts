import {Voiture} from './voiture.model';

export class Vidange {
  // @ts-ignore
  public id : number;
  // @ts-ignore
  public  ref : string;
  // @ts-ignore
  public  dateVidange: string;
  // @ts-ignore
  public kilomtrageActuel : number;
  // @ts-ignore
  public kilometrageVidangeSuivant : number;
  // @ts-ignore
  public  montant : string;
  public  voiture = new Voiture();
}
