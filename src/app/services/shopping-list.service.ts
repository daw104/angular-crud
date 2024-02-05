import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Ingredient} from "../../model/Ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientesChanged = new Subject<Ingredient[]>();
  ingridients: Ingredient[] = [];

  constructor() {
  }

  getIngredientes() {
    return this.ingridients.slice();
  }

  //que maneje la lista de ingredientes, que añada los ingredientes
  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this.ingredientesChanged.next(this.ingridients.slice());
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    ingredient.forEach(ingredient => {
      const exists = this.ingridients.some(objeto => objeto.name === ingredient.name);
      if (!exists) {
        this.ingridients.push(ingredient);
        alert(`Ingredientes añadidos satisfactoriamente`);
      } else {
        alert(`ya existe!!!!!!!!!!!!`);
      }
    });
    this.ingredientesChanged.next(this.ingridients.slice());
  }
}
