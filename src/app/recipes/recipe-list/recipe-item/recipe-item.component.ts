import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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


}
