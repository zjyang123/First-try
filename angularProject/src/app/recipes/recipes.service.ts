import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'This is simply a test',
            'http://givememora.com/wp-content/uploads/2014/03/shnitzel.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fried', 20)
            ]),

        new Recipe(
            'Burger',
            'This is simply a test',
            'http://i4.mirror.co.uk/incoming/article10403752.ece/ALTERNATES/s615/McDonalds-release-vegan-burger-but-youll-have-to-travel-pretty-far-to-get-one.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Tomatoes', 5)
            ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
