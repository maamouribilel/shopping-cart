import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  onSave() {
    this.dataStorageService
      .saveRecipes(this.recipeService.getRecipes())
      .subscribe(response => {
        console.log(response);
      });
  }

  onGet() {
    this.dataStorageService.fetchRecipes();
  }
}
