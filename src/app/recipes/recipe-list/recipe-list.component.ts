import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../model/Recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('arepas', 'son de vnzla', 'https://cdn.recetasderechupete.com/wp-content/uploads/2019/11/Tipos-de-arepa-2.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    const recipes = this.recipes;
    console.log(recipes);
    return recipes;
  }


}
