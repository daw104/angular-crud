import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  createRecipeForm!: FormGroup;
  recipeIngredientes!: any;
  recipe!: Recipe;

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _recipeService: RecipesService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.getRecipeId();
  }

  initFormRecipe() {
    const randomId = this.createRandomId();
    this.createRecipeForm = new FormGroup({
      'id': new FormControl(Number(randomId)),
      'name': new FormControl(),
      'imagePath': new FormControl(),
      'description': new FormControl(),
      'ingredients': new FormArray([]),
    });
  }

  createRandomId() {
    const idLength = 2;
    let randomId = '';
    for (let i = 0; i < idLength; i++) {
      randomId += Math.floor(Math.random() * 10); // Números del 0 al 9
    }
    return randomId;
  }

  onSubmitRecipeForm() {
    console.log(this.createRecipeForm.value);
    this.recipe = this.createRecipeForm.value;
    if (this.editMode) {
      this._recipeService.updateRecipeById(Number(this.recipe.id), this.recipe);
      this.createRecipeForm.reset();
      this._router.navigate(['recipes', 'list', Number(this.recipe.id)]);
    } else {
      this._recipeService.createRecipe(this.recipe);
      this.createRecipeForm.reset();
      this._router.navigate(['recipes', 'list']);
    }
  }

  onCancelForm(recipeId: number) {
    this._router.navigate(['recipes', 'list', recipeId]);
  }

  listenOnEditRecipes() {
    if (this.editMode) {
      const recipe = this._recipeService.getRecipeBy(this.recipeId);
      this.recipeIngredientes = recipe.ingredients;
      this.createRecipeForm.patchValue({
        'id': recipe.id,
        'name': recipe.name,
        'imagePath': recipe.imagePath,
        'description': recipe.description,
      });

      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          this.ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            }))
        }
        console.log(this.createRecipeForm)
      }
    }
  }


  get ingredients() { // a getter!
    return (<FormArray>this.createRecipeForm.get('ingredients'));
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
    console.log(this.ingredients);
  }

  getRecipeId() {
    this._activatedRouter.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initFormRecipe();
        this.listenOnEditRecipes();
      }
    )
  }

}
