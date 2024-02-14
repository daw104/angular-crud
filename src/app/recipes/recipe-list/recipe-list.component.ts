import {ThisReceiver} from "@angular/compiler";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import {Subscription} from "rxjs";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";
import {UpdateUserModalComponent} from "../../user/update-user-modal/update-user-modal.component";
import {RecipeCreateComponent} from "../recipe-create/recipe-create.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeChangedSubcription: Subscription = this._recipeService.recipesChanged$.subscribe(
    recipes => {
      this.getRecipes();
    }
  );
  selectedRecipe: Recipe | null = null;

  constructor(
    private _recipeService: RecipesService,
    private _router: Router,
    public dialogService: DialogService,
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this._recipeService.getAllRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      }, error => {

      }
    )
  }

  OpenCreateRecipe() {
    this.dialogService.open(RecipeCreateComponent, {
      width: '70%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true,
    }).onClose.subscribe(() => {
      this._recipeService.recipesChanged.next();
    })

  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
