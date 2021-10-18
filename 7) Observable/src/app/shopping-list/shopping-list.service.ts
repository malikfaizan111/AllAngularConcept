
import { Ingredient } from "../shared/ingredient.mode";
import { Subject } from "rxjs";
export class ShoppinglistService{

    ingredientsChanged =  new Subject<Ingredient[]>();
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
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients); //...spread Operator
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}