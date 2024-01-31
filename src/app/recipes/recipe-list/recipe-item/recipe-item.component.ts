import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../../model/Recipe";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeInput: Recipe;

  constructor(
    private _recipeService: RecipesService
  ) {
  }

  ngOnInit() {
  }

  public onSelectRecipe() {
    return this._recipeService.recipeSelected.emit(this.recipeInput);
  }


}
