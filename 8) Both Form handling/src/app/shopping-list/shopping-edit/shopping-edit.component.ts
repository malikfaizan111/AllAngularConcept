import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingIngredient',{static:true}) shoppingFormEdit : NgForm;
  subscription : Subscription;
  deleteSubscription : Subscription;
  editMode = false;     // for update purpose
  editedItemNumber : number; // for update purpose
  editedItem: Ingredient;


  constructor(private slService: ShoppingListService) {}

  ngOnInit()
   {
this.subscription =  this.slService.startedEditing.subscribe(
  (index: number) => {
    this.editMode = true;
    this.editedItemNumber = index;
    this.editedItem = this.slService.getIngredient(index);
    this.shoppingFormEdit.setValue({
      name: this.editedItem.name,
      amount: this.editedItem.amount
    })

  }
);
   }

   ngOnDestroy()
   {
     this.subscription.unsubscribe();
   }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemNumber,newIngredient);
    }
    else
    {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    console.log("SubmittedForm" + form);
  } 

  onClearForm(){
    this.editMode = false;
    this.shoppingFormEdit.reset();
  }

  onDeleteItem()
  {
    this.onClearForm();
    this.slService.deleteIngredient(this.editedItemNumber);
  }
}
