import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppinglistService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [];
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredient();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => this.ingredients = ingredient
    );  }


}
