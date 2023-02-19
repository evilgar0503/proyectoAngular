import { CreateropaComponent } from './components/createropa/createropa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionsviewComponent } from './components/collectionsview/collectionsview.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegisterComponent } from './components/register/register.component';
import { RopaviewComponent } from './components/ropaview/ropaview.component';


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'collections/:nombre/:id', component: CollectionsviewComponent},
  {path:'login', component: LoginComponent},
  {path:'carrito', component: CarritoComponent},
  {path:'register', component: RegisterComponent},
  {path:'articulos', component: RopaviewComponent},
  {path:'create/ropa', component: CreateropaComponent},
  {path:'',redirectTo:'', pathMatch:'full'}
 ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
