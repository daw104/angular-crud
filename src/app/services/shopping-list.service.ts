import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientesChanged = new EventEmitter<Ingredient[]>();
  ingridients: Ingredient[] = [];

  constructor() {
  }

  getIngredientes() {
    return this.ingridients.slice();
  }

  //que maneje la lista de ingredientes, que añada los ingredientes
  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientesChanged.emit(this.ingridients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    ingredient.forEach(ingredient => {
      const exists = this.ingridients.some(objeto => objeto.name === ingredient.name);
      if (!exists) {
        this.ingridients.push(ingredient);
      }
    });
    this.ingredientesChanged.emit(this.ingridients.slice());
  }
}
