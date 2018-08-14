import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Mac n\' Cheese', ['Mac', 'Cheese'], ['Put mac in boiling water', 'let mac boil', 'remove water', 'add cheese', 'eat and enjoy']),
    new Recipe('Bacon', ['Bacon'], ['Cook bacon.']),
    new Recipe('Steamed Brocolli', ['Steam', 'brocolli'], ['Steam the brocolli.']),
    new Recipe('Cereal', ['Milk', 'cereal', 'eraser shavings'], ['Put all ingredients into bowl and enjoy.'])
  ];
}
