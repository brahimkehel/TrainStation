import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { HoraireComponent } from './horaire/horaire.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'Acceuil',
    component: AcceuilComponent
  },
  {
    path: 'Horaires',
    component: HoraireComponent
  },
  { path: '**', redirectTo: 'Acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
