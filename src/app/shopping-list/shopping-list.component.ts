import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[] = [];

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.getIngredientes();
    this._shoppingListService.ingredientesChanged.subscribe(
      (ingredient: Ingredient[]) => this.ingridients = ingredient
    );
  }

  public getIngredientes() {
    this.ingridients = this._shoppingListService.getIngredientes();

  }


}
