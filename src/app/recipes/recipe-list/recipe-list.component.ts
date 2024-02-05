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
  paramsSubcription: Subscription;

  constructor(
    private _recipeService: RecipesService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    const recipes = this._recipeService.getRecipes();
    this.recipes = recipes;
  }

  createRecipe() {
    this._router.navigate(['recipes', 'list', 'create']);
  }


}
