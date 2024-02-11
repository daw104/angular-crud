import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
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
  createShoppingListForm!: FormGroup;
  ingredient: Ingredient;
  ingredientSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  selectedItem: Ingredient;

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.createFormShoppingList();
    this.listenOnEditIngredient();
  }

  createFormShoppingList() {
    this.createShoppingListForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required]),
    });
  }

  onSubmitCreateShoppingListForm() {
    this.ingredient = this.createShoppingListForm.value;
    if (this.editMode) {
      this._shoppingListService.updateIngredient(this.editedItemIndex, this.ingredient);
    } else {
      this._shoppingListService.addIngredient(this.ingredient);
    }
    this.editMode = false;
    this.createShoppingListForm.reset();
  }

  listenOnEditIngredient() {
    this.ingredientSubscription = this._shoppingListService.startEditingIngredient.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.selectedItem = this._shoppingListService.getIngredientByIndex(index);
        this.createShoppingListForm.setValue({
          name: this.selectedItem.name,
          amount: this.selectedItem.amount,
        });
      }
    );
  }

  clearFormShoppingList() {
    this.createShoppingListForm.reset();
    this.editMode = false;
  }

  deleteShoppingListItem(itemToDelete: Ingredient) {
    this._shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearFormShoppingList();
    alert(`se ha eliminado el ingrediente satisfactoriamente`);
  }

  public addShoppingList() {
    const newIngrediente = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this._shoppingListService.addIngredient(newIngrediente);
  }

}
