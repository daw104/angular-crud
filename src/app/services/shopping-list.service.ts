import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Ingredient} from "../../model/Ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private _ingredientesChanged = new Subject<Ingredient[]>();
  ingredientesChanged$ = this._ingredientesChanged.asObservable();
  ingridients: Ingredient[] = [];
  startEditingIngredient = new Subject<number>();

  constructor() {
  }

  getIngredientes() {
    return this.ingridients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.ingridients[index];
  }

  //que maneje la lista de ingredientes, que añada los ingredientes
  addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
    this._ingredientesChanged.next(this.ingridients.slice());
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
    this._ingredientesChanged.next(this.ingridients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingridients[index] = newIngredient;
    this._ingredientesChanged.next(this.ingridients.slice());
  }

  deleteIngredient(ingredientIndex: number) {
    this.ingridients.splice(ingredientIndex, 1);
    this._ingredientesChanged.next(this.ingridients.slice());
  }

}
