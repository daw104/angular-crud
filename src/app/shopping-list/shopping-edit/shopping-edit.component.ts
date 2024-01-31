import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/Ingredient";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;


  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
  }

  public addShoppingList() {
    const newIngrediente = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this._shoppingListService.addIngredient(newIngrediente);
  }

}
