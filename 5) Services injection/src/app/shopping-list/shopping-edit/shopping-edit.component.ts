import { ShoppinglistService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.mode';
import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef | undefined ;
  @ViewChild('ammountInput', {static:true}) ammountInput: ElementRef | undefined;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit(): void {
  }

  addItems(){
    if(this.nameInput?.nativeElement.value !== "" && this.ammountInput?.nativeElement.value !== ""){
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmmount = this.ammountInput?.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmmount);

    this.shoppinglistService.addIngredientinshoppinglist(newIngredient);
  }
  else{
    return;
  }
  }
}
