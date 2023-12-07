import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path : '', component: AccueilComponent},
  {path : 'accueil', component: AccueilComponent},
  {path : 'header', component:HeaderComponent},
  {path : 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
