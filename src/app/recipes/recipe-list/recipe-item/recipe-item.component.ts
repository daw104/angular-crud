import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../../model/Recipe";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeInput: Recipe;
  @Output() recipeOnClick = new EventEmitter<any>();

  ngOnInit() {
  }

  public onSelectByRecipe(recipe: any) {
    this.recipeOnClick.emit(recipe);
  }


}
