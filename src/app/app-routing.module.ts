import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:'home',
     loadChildren: () =>  import('./portfolio/portfolio.module').then (m => m.PortfolioModule),
  
  },
  {
     path:'**',
     redirectTo: 'home' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
