import {ThisReceiver} from "@angular/compiler";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  private _recipeChangedSubcription: Subscription;
  selectedRecipe: Recipe | null = null;
  recipeName: string = '';

  constructor(
    private _recipeService: RecipesService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this._recipeChangedSubcription = this._recipeService.recipesChanged$.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe
      },
    );
    console.log('RECIPES', this.recipes);
  }

  createRecipe() {
    this._router.navigate(['recipes', 'list', 'create']);
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

}
