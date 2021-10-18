import { ShoppinglistService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
 
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppinglistService : ShoppinglistService){}
    private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is simply Test Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
          new Ingredient('Meat',1),
          new Ingredient('french Fries', 20)

      ]
    ),
    new Recipe(
      'Another Test recipe',
      'This is simply Test Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
          new Ingredient('Buns',2),
          new Ingredient('Potatoes',2)
      ]   
      ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  AddIngredientToShoppinglist(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredient(ingredients);
  }

  getRecipe(index:number)
  {
    return this.recipes.slice()[index];
  }
}
