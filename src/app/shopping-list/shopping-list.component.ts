import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[] = [];

  constructor() {
  }

  ngOnInit() {
    this.getIngredientes();
  }

  public getIngredientes() {
    const ingredientes = this.ingridients;
    console.log(ingredientes);
    return ingredientes;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingridients.push(ingredient);
  }

}
