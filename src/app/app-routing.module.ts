import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipeDetailsPageModule } from './recipes/recipe-details/recipe-details.module';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'recipes',
//     pathMatch: 'full'
//   },
//   {
//     path: 'recipes',
//     loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
      },
      {
        path: ':recipeId',
        loadChildren:() => import ('./recipes/recipe-details/recipe-details.module').then(m=>RecipeDetailsPageModule)
         
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
