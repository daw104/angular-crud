import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;

  constructor(
    private _activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getRecipeId();
  }

  getRecipeId() {
    this._activatedRouter.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    )
  }

}
