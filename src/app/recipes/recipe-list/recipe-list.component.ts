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
    // Verificar si hay un id en la URL
    const currentUrl = this._router.url;
    if (currentUrl.includes('/recipes/') && currentUrl.split('/').length === 3) {
      console.log('NO hay id en la ruta'); //se CREA
      this._router.navigate([currentUrl, 'create'])
    } else {
      const url = currentUrl.split('/');
      url.pop();
      console.log(url)
      console.log('SI hay id en la ruta') //se LIMPIA LA URL
      this._router.navigate([url, 'create'])
    }


  }

}
