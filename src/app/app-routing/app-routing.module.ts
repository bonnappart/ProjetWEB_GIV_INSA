import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import { ListeUtilisateursComponent } from '../liste-utilisateurs/liste-utilisateurs.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { AddAnnonceComponent } from '../add-annonce/add-annonce.component';
import { SignupComponent} from '../signup/signup.component';
import { UserpageComponent } from '../userpage/userpage.component';
import { ViewAnnoncesComponent } from '../view-annonces/view-annonces.component';
import {AfficherAnnonceComponent} from '../afficher-annonce/afficher-annonce.component';
import { ConceptionComponent} from '../conception/conception.component';
import { ManageAnnoncesComponent } from '../manage-annonces/manage-annonces.component';
import {CompteGestionComponent} from '../compte-gestion/compte-gestion.component';


const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'utilisateurs/:id', component: UserpageComponent},
  {path: 'utilisateurs', component: ListeUtilisateursComponent},
  {path: 'conception', component: ConceptionComponent},
  {path: 'annonces/view', component: ViewAnnoncesComponent},
  {path: 'annonces/add', component: AddAnnonceComponent},
  {path: 'annonces/manage', component: ManageAnnoncesComponent},
  {path: 'gestion', component: CompteGestionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
