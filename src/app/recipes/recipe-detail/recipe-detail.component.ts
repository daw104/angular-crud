import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../model/Ingredient";
import {Recipe} from "../../../model/Recipe";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetailInput: Recipe;
  selectedIngredients: any = {}

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
  }


  addIngredientsToShoppingList() {
    const ingredients: any = Object.values(this.selectedIngredients).map((item: any) => item.ingredient);
    try {
      this._shoppingListService.addIngredientsToShoppingList(ingredients);
    } catch (error) {
      alert(`ha ocurrido un error al agregar los ingredientes ${JSON.stringify(ingredients)}, error: ${error}`);
    }

  }

  toggleIngredientSelection(index: number, event: any, ingredient: any) {
    if (event.target.checked == true) {
      console.log('checkbox is checked');
      this.selectedIngredients[index] = {
        selected: true,
        index,
        ingredient
      }
      console.log(this.selectedIngredients);
    } else {
      //recorrer el objeto y buscar el index que coincide con el que has desmarcado y eliminarlo del objeto
      this.selectedIngredients = Object.fromEntries(
        Object.entries(this.selectedIngredients).filter(([key, value]: any) => value.index !== index)
      )
    }
  }

}
