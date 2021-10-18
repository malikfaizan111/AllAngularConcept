import { Ingredient } from './../shared/ingredient.mode';
export class Recipe{
   name: string;
   description:string;
   imagePath:string;
   ingredients: Ingredient[];


  constructor(name:string, description:string, imagePath:string, ingredients: Ingredient[])
  {
    this.name = name;
    this.description= description;
    this.imagePath = imagePath;
    this.ingredients = ingredients
  }

}