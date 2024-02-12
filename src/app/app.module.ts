import {NgOptimizedImage} from "@angular/common";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesService} from "./services/recipes.service";
import {ShoppingListService} from "./services/shopping-list.service";
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {GalleryComponent} from './gallery/gallery.component';
import {AccountComponent} from "./user/account/account.component";
import {NewAccountComponent} from "./user/new-account/new-account.component";
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GalleryComponent,
    UserComponent,
    UserListComponent,
    AccountComponent,
    NewAccountComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
