import { Ingredient } from './../../shared/ingredient.mode';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe | any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddShoppingList(){
    this.recipeService.AddIngredientToShoppinglist(this.recipe.ingredients);
  }

}
