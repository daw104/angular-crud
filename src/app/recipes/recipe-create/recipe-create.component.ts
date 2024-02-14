import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  createRecipeForm: FormGroup = this._fb.group({
    'name': new FormControl(),
    'imagePath': new FormControl(),
    'description': new FormControl(),
    'ingredients': new FormArray([]),
  });


  constructor(
    private _config: DynamicDialogConfig,
    private _fb: FormBuilder,
    private _recipesService: RecipesService,
    private _dynamicDialogRef: DynamicDialogRef
  ) {
  }

  ngOnInit() {
  }

  submitRecipeForm() {
    const body = this.createRecipeForm.value;
    this._recipesService.createRecipe(body).subscribe({
      next: (response) => {
        this._recipesService.recipesChanged.next();
        this.createRecipeForm.reset();
        this._dynamicDialogRef.close(true);
      },
      error: (error) => {
      }
    });
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
  }

}
