import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Wine} from '../models/wine';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  wines =  [
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
    return this.getWines().pipe(
      map(wines => {
        // tslint:disable-next-line:no-non-null-assertion
        const wine = wines.find(w => w.id === wineId)!!;
        wine.quantityInCart = changeInQuantity;
        return wine;
      })
    );
  }

  create(wine: Wine): Observable<Wine> {
    return this.getWines().pipe(
      map(wines => {
        wines.push(wine);
        return wine;
      })
    );
  }
}
