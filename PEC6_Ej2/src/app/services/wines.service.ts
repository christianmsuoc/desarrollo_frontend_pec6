import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Wine} from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  wines = [
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

  getWines(): Observable<Wine[]> {
    return of(this.wines);
  }

  changeQuantity(wineId: number, changeInQuantity: number): Observable<Wine> {
    // tslint:disable-next-line:no-non-null-assertion
    const wine = this.wines.find(w => w.id === wineId)!!;
    wine.quantityInCart = changeInQuantity;
    return of(wine);
  }

  create(wine: Wine): Observable<Wine> {
    wine.quantityInCart = 0;
    wine.foodPairing = [];
    wine.id = Math.max(...this.wines.map(w => w.id)) + 1;
    this.wines.push(wine);
    return of(wine);
  }


}
