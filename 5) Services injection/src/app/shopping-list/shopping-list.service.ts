
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.mode";
export class ShoppinglistService{

    ingredientsChanged =  new EventEmitter<Ingredient[]>();
   private ingredients:Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

      getIngredient(){
          return this.ingredients.slice();
      }


      addIngredientinshoppinglist(newIngredient : Ingredient)
      {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredient(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients); //...spread Operator
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}