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
      'https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
      [
          new Ingredient('Meat',1),
          new Ingredient('french Fries', 20)

      ]
    ),
    new Recipe(
      'Another Test recipe',
      'This is simply Test Recipe',
      'https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
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
