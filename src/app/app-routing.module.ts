import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent } from "./login/login.component";
import {PrincipalComponent } from "./principal/principal.component";
import {RegistroComponent } from "./registro/registro.component";

const routes: Routes = [
  { path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"principal", component:PrincipalComponent, pathMatch:"full"},
  {path:"registro", component:RegistroComponent, pathMatch:"full"},
  {path:"", component:PrincipalComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
