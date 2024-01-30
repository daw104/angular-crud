import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  variableDelPadre!: string;
  showGalery!: boolean;
  showRecipe!: boolean;
  showShoppingList!: boolean;

  onGalleryClick(show: any) {
    this.showGalery = show;
    this.showRecipe = !show;
    this.showShoppingList = !show;
  }

  onRecipeClick(show: any) {
    this.showRecipe = show;
    this.showGalery = !show;
    this.showShoppingList = !show;
  }

  capturaElEventoDelHijo(event: any) {
    console.log(event)
    this.variableDelPadre = event;
  }

  onShoppingListClick(show: any) {
    this.showShoppingList = show;
    this.showGalery = !show;
    this.showRecipe = !show;
  }

}
