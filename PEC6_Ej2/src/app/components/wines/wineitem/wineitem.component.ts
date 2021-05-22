import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Wine} from "../../../models/wine";
import {WineQuantityChange} from "../../../models/wine-quantity-change";

@Component({
  selector: 'app-wineitem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wine" [ngClass]="{'available': wine?.isOnSale, 'unavailable': !wine?.isOnSale}">
      <img [src]="wine?.imageUrl" [alt]="wine?.name + ' image'">
      <p>{{ wine?.name }}</p>
      <p>{{ wine?.price | currency:'EUR':'symbol'}}</p>
      <div class="unit-selector">
        <div class="button-remove">
          <button type="button" (click)="removeUnit()" *ngIf="moreThan0Units"> -</button>
        </div>
        <div class="quantity">
          <p>{{ wine?.quantityInCart }}</p>
        </div>
        <div class="button-add">
          <button type="button" (click)="addUnit()" [disabled]="!wine?.isOnSale"> +</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wine {
        grid-area: wine;
        border: solid black 1px;
        padding: 40px;
        display: grid;
        grid-template-rows: auto auto auto auto;
        justify-items: center;
        font-size: x-large;
      }

      .unit-selector {
        display: grid;
        justify-items: center;
        grid-template: 'button-remove quantity button-add';
        grid-gap: 10px;
        align-items: center;

        button {
          height: 30px;
          width: 40px;
          background-color: white;
          border-radius: 5px;
          border: none;
          font-size: large;
          cursor: pointer;
        }

      }

      .available {
        background-color: rgba(77, 255, 36, 0.42);
      }

      .unavailable {
        background-color: rgba(153, 38, 38, 0.42);
      }
    `
  ]
})
export class WineitemComponent {

  @Input() wine?: Wine;
  @Output() changeQuantity = new EventEmitter<WineQuantityChange>();


  addUnit() {
    this.changeQuantity.emit({wine: this.wine!!, units: this.wine!.quantityInCart + 1});
  }

  removeUnit() {
    this.changeQuantity.emit({wine: this.wine!!, units: this.wine!.quantityInCart - 1});
  }

  get moreThan0Units(): boolean {
    return this.wine?.quantityInCart != null && this.wine?.quantityInCart > 0;
  }
}
