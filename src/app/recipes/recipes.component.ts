import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../model/Recipe";
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: any;

  constructor(
    private _recipeService: RecipesService
  ) {
  }

  ngOnInit() {
    this._recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

  selectByRecipe(event: any) {
    this.selectedRecipe = event;
  }

}
