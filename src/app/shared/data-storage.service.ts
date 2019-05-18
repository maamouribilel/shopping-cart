import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveRecipes(recipes: Recipe[]) {
    return this.http.put('FIREBASE REAL-TIME DB LINK', recipes);
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('FIREBASE REAL-TIME DB LINK')
      .subscribe(response => {
        const recipes: Recipe[] = response;
        this.recipeService.setRecipes(recipes);
        //      console.log(recipes);
      });
  }
}
