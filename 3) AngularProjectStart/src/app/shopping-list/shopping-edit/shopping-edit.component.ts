import { Ingredient } from './../../shared/ingredient.mode';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef | undefined ;
  @ViewChild('ammountInput', {static:true}) ammountInput: ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addItems(){
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmmount = this.ammountInput?.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
