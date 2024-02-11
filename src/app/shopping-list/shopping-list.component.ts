import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Ingredient} from "../../model/Ingredient";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingredient[] = [];
  private _ingridientsChangedSubcription: Subscription;

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.getIngredientes();
  }

  public getIngredientes() {
    this.ingridients = this._shoppingListService.getIngredientes();
    this._ingridientsChangedSubcription = this._shoppingListService.ingredientesChanged$.subscribe(
      (ingredient: Ingredient[]) => this.ingridients = ingredient
    );
  }

  ngOnDestroy() {
    this._ingridientsChangedSubcription.unsubscribe();
  }

}
