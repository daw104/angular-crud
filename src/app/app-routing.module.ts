import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GalleryComponent} from "./gallery/gallery.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {UserComponent} from "./user/user.component";


const routes: Routes = [

  {
    path: 'recipes',
    component: RecipesComponent,
    // el recipes tiene el router outlet para mostrar
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: RecipeListComponent,
        children: [
          {
            path: 'create',
            component: RecipeEditComponent
          },
          {
            path: ':id',
            component: RecipeDetailComponent
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent
          }
        ]
      },
      /*   el id fuera del recipes
         {
           path: ':id',
           component: RecipeDetailComponent
         },*/
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
