import { RecipeService } from './../recipe.service';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] | undefined;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }


}
