import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor(
    private _recipeService: RecipesService
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    const recipes = this._recipeService.getRecipes();
    this.recipes = recipes;
  }


}
