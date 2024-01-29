import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingredient[] = [
    new Ingredient('ingredient 1', 12),
    new Ingredient('ingredient 2', 2)
  ];

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


}
