import {Voiture} from './voiture.model';

export class Consommationcarburant {
  // @ts-ignore
  public id: number ;
  // @ts-ignore
  public ref: string ;
  // @ts-ignore
  public annee: number ;
  // @ts-ignore
  public mois: number ;
  // @ts-ignore
  public numeroSemaine: number ;
  // @ts-ignore
  public litre: number ;
  // @ts-ignore
  public prix: number ;
  // @ts-ignore
  public description: string ;
  // @ts-ignore
  public dateConsommationCarburant: Date ;
  public voiture = new Voiture();
}
