import {Component} from '@angular/core';
import {Wine} from "../../../models/wine";
import {WineQuantityChange} from "../../../models/wine-quantity-change";

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent {

  wines: Wine[] = [
    {
      id: 1,
      name: 'Pesquera Reserva 2016',
      imageUrl: 'assets/images/pesquera.png',
      price: 39.57,
      isOnSale: true,
      quantityInCart: 0,
      foodPairing: [
        {name: 'Goat cheese', kcal: 364, vegan: false, gluten: false},
        {name: 'Bread', kcal: 365, vegan: true, gluten: true}
      ]
    },
    {
      id: 2,
      name: 'Muga reserva selección especial 2016',
      imageUrl: 'assets/images/muga.png',
      price: 27.90,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: [
        {name: 'Meat', kcal: 250, vegan: false, gluten: false},
        {name: 'Bread', kcal: 365, vegan: true, gluten: true}
      ]
    },
    {
      id: 3,
      name: 'Valduero reserva premium 6 años',
      imageUrl: 'assets/images/valduero.png',
      price: 53.60,
      isOnSale: true,
      quantityInCart: 0,
      foodPairing: [
        {name: 'Meat', kcal: 250, vegan: false, gluten: false}
      ]
    }
  ];

  changeQuantity(wineQuantityChange: WineQuantityChange) {
    const wine = this.wines.find(w => w.id === wineQuantityChange.wine.id)!!;
    wine.quantityInCart = wineQuantityChange.units;
  }

  identifyWine(index: number, wine: Wine) {
    return wine.id;
  }
}
