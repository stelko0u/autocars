import { ContactsComponent } from './shared/contacts/contacts.component';
import { AboutComponent } from './shared/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './shared/home/home.component';
import { AddCarComponent } from './feature/add-car/add-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // Basic
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  // Auth
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // Car
  {
    path: 'add-car',
    component: AddCarComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
