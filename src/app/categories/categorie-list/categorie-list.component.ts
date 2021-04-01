import {Component, OnInit} from '@angular/core';
import {Categorie} from '../../controller/model/categorie.model';
import {CategorieService} from '../../controller/service/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

// tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  public delete(index: number) {
    this.categories.splice(index, 1);

// tslint:disable-next-line:typedef
  }

  public update(index: number, categorie: Categorie) {
    this.categorieService.update(index, categorie);

  }

  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

  constructor(private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.categorieService.init();
  }

}



