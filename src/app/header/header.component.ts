import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() galleryClick = new EventEmitter<any>();
  @Output() recipeClick = new EventEmitter<any>();
  @Output() shoppingListClick = new EventEmitter<any>();
  @Input() title!: string;

  constructor() {
  }

  public onRecipeClick() {
    this.recipeClick.emit(true);
  }

  public onGalleryClick() {
    this.galleryClick.emit(true);
  }

  public onShoppingListClick() {
    this.shoppingListClick.emit(true);
  }

}
