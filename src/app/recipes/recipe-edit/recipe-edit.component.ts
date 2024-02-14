import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MenuItem, MessageService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeId!: string
  activeIndex: number = 0;
  items: MenuItem[];
  recipe: Recipe;
  createRecipeFormStep1: FormGroup = this._fb.group({
    name: [],
    imagePath: [],
    description: []
  });
  createRecipeFormStep2: FormGroup = this._fb.group({
    ingredients: this._fb.array([])
  });

  constructor(
    private _config: DynamicDialogConfig,
    private _fb: FormBuilder,
    private _dynamicDialogRef: DynamicDialogRef,
    private _recipesService: RecipesService,
    private _messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.recipeId = this._config.data.recipeId;
    this.getItemsForStepper();
    this.getRecipeById();
  }

  getRecipeById() {
    this._recipesService.getRecipeById(this.recipeId).subscribe({
      next: (response) => {
        this.recipe = response;
        this.createRecipeFormStep1.patchValue({
          name: response.name,
          imagePath: response.imagePath,
          description: response.description,
        });
        if (this.recipe.ingredients) {
          for (let ingredient of this.recipe.ingredients) {
            this.ingredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name),
                'amount': new FormControl(ingredient.amount)
              }))
          }
        }
      },
      error: (error) => {
      }
    });
  }

  submitUpdateForm() {
    const body = {
      ...this.createRecipeFormStep1.value,
      ...this.createRecipeFormStep2.value,
    };
    this._recipesService.updateRecipeById(this.recipeId, body).subscribe({
      next: (response) => {
        this._dynamicDialogRef.close(true);
      },
      error: (error) => {
      }
    });
  }


  nextStep() {
    console.log(this.createRecipeFormStep1.valid)
    if (this.createRecipeFormStep1.valid) {
      this.activeIndex++;
    }
  }

  prevStep() {
    // Retrocede al paso anterior
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  submitRecipeForm() {
    // Envía el formulario completo
    if (this.createRecipeFormStep2.valid) {
      // Realiza la lógica para enviar el formulario completo
    }
  }

  get ingredients() {
    return (<FormArray>this.createRecipeFormStep2.get('ingredients'));
  }

  onDeleteIngredient(index: number) {
    if (index >= 0 && index < this.ingredients.length) {
      this.ingredients.removeAt(index);
    }
  }

  onAddIngredient() {
    const newIngredient = new FormGroup({
      'name': new FormControl(''),
      'amount': new FormControl('')
    });
    this.ingredients.push(newIngredient);
  }

  getItemsForStepper() {
    this.items = [
      {
        label: 'Personal',
        command: (event: any) => this._messageService.add({
          severity: 'info',
          summary: 'First Step',
          detail: event.item.label
        })
      },
      {
        label: 'Seat',
        command: (event: any) => this._messageService.add({
          severity: 'info',
          summary: 'Second Step',
          detail: event.item.label
        })
      },
    ];
  }

}
