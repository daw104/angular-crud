import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {TableModule} from "primeng/table";

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
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {FilterPipe} from './pipes/filter.pipe';
import {CrateUsersComponent} from './user/crate-users/crate-users.component';
import {UpdateUserModalComponent} from './user/update-user-modal/update-user-modal.component';

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
    RecipeEditComponent,
    FilterPipe,
    CrateUsersComponent,
    UpdateUserModalComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DynamicDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ShoppingListService, RecipesService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
