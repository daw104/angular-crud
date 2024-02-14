import {ThisReceiver} from "@angular/compiler";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {Subscription} from "rxjs";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";
import {UpdateUserModalComponent} from "../../user/update-user-modal/update-user-modal.component";
import {RecipeCreateComponent} from "../recipe-create/recipe-create.component";
import {RecipeEditComponent} from "../recipe-edit/recipe-edit.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeChangedSubcription: Subscription = this._recipeService.recipesChanged$.subscribe(
    recipes => {
      this.getRecipes();
    }
  );
  selectedRecipe: Recipe | null = null;
  items: MenuItem[];
  isLoading: boolean;

  constructor(
    private _recipeService: RecipesService,
    private _router: Router,
    public dialogService: DialogService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          // this.update();
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          //  this.delete();
        }
      },
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }

  ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this.isLoading = true;
    this._recipeService.getAllRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
        this.isLoading = false;
        console.log(this.recipes)
      }, error => {
        this.isLoading = false;
      }
    )
  }

  OpenCreateRecipe() {
    this.dialogService.open(RecipeCreateComponent, {
      width: '70%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true,
    }).onClose.subscribe(() => {
      this._recipeService.recipesChanged.next();
    })
  }

  deleteRecipe(recipeId: string) {
    this._confirmationService.confirm({
      message: 'Quieres eliminar esta receta?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._recipeService.deleteRecipeById(recipeId).subscribe(
          {
            next: (response) => {
              this._recipeService.recipesChanged.next();
            },
            error: (error) => {
            }
          }
        )
        this._messageService.add({severity: 'success', summary: 'Confirmed', detail: 'Receta eliminado'});
      },
      reject: () => {
        this._messageService.add({severity: 'warn', summary: 'Cancelada', detail: 'Operación cancelada'});
      },
      acceptLabel: 'Si',
      rejectLabel: 'No'
    });
  }

  openModalUpdateRecipe(recipeId: string) {
    this.dialogService.open(RecipeEditComponent, {
      data: {
        recipeId
      },
      width: '70%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true,
    }).onClose.subscribe(() => {
      this._recipeService.recipesChanged.next();
    })
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
