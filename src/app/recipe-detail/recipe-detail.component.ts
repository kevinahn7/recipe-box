import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: string, recipe: Recipe) {
    recipe.ingredients.push(ingredient);
  }

  removeIngredient(ingredient: string, recipe: Recipe) {
    let index = recipe.ingredients.indexOf(ingredient);
    recipe.ingredients.splice(index, 1);
  }

  addInstruction(instruction: string, recipe: Recipe) {
    recipe.instructions.push(instruction);
  }

  removeInstruction(instruction: string, recipe: Recipe) {
    let index = recipe.instructions.indexOf(instruction);
    recipe.instructions.splice(index, 1);
  }

}
