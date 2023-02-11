import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionsviewComponent } from './components/collectionsview/collectionsview.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'collections/:nombre', component: CollectionsviewComponent},
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'', pathMatch:'full'}
 ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
