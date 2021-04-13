import {Voiture} from './voiture.model';
import {Typevidange} from './typevidange.model';

export class Vidange {
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public  ref: string;
  // @ts-ignore
  public  dateVidange: Date;
  // @ts-ignore
  public kilomtrageActuel: number;
  // @ts-ignore
  public kilometrageVidangeSuivant: number;
  // @ts-ignore
  public  montant: number;
  public  voiture = new Voiture();
}
