import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {Ingredient} from "../../../model/Ingredient";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  selectedIngredients: any = {};
  paramsSubcription: Subscription;
  recipeId!: string;

  constructor(
    private _shoppingListService: ShoppingListService,
    private _recipeService: RecipesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    // this.getRecipeById();
  }

  getRecipeById() {
    this.paramsSubcription = this._activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id']
        //  this.recipeDetail = this._recipeService.getRecipeById(this.recipeId);
      }
    );
    console.log(this.recipeDetail)
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

  editRecipe() {
    this._router.navigate(['edit'], {relativeTo: this._activatedRoute})
  }

  deleteRecipe() {
    this._recipeService.deleteRecipeById(this.recipeId);
    this._router.navigate(['recipes', 'list']);
  }

}
