import { Subject } from "rxjs";
import { Component } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";
import { error } from "console";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  deleteData() {
    this.dataStorageService.deleteRecipes().subscribe();
    this.router.navigate(["shopping-list"], { relativeTo: this.route });
  }
}
