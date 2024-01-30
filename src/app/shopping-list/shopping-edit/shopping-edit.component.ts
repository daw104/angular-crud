import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/Ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @Output() ingridientdAdded = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  public addShoppingList() {
    const newIngrediente = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingridientdAdded.emit(newIngrediente);
    console.log(this.ingridientdAdded);
  }

}
