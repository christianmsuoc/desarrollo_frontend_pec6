import {Component} from '@angular/core';
import {Wine} from '../../../models/wine';
import {WineQuantityChange} from '../../../models/wine-quantity-change';
import {WinesService} from '../../../services/wines.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent {

  wines$ = this.wineService.getWines();

  constructor(private wineService: WinesService) {}

  changeQuantity(wineQuantityChange: WineQuantityChange): void {
    this.wineService.changeQuantity(wineQuantityChange.wine.id, wineQuantityChange.units);
  }

  identifyWine(index: number, wine: Wine): number {
    return wine.id;
  }
}
