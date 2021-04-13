import {Consommationcarburant} from './consommationcarburant.model';
import {Typecarburant} from './typecarburant.model';
import {Modelevoiture} from './modelevoiture.model';
import {Vidange} from './vidange.model';

export class Voiture {
  public id: number | undefined;
  public ref: string | undefined;
  public matricule: string | undefined;
  public dateDernierVidange: string | undefined;
  public typeCarburant = new Typecarburant();
  public vidange = new Array<Vidange>();
  public model = new Modelevoiture();
}

