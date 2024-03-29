import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { CollectionsviewComponent } from './components/collectionsview/collectionsview.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CardCarritoComponent } from './components/card-carrito/card-carrito.component';
import { RegisterComponent } from './components/register/register.component';
import { RopaviewComponent } from './components/ropaview/ropaview.component';
import { CreateropaComponent } from './components/createropa/createropa.component';
import { EditeropaComponent } from './components/editeropa/editeropa.component';
import { RopaDatosComponent } from './components/ropa-datos/ropa-datos.component';
import { MusicaComponent } from './components/musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    ButtonLoginComponent,
    CollectionsviewComponent,
    ProductCardComponent,
    CarritoComponent,
    CardCarritoComponent,
    RegisterComponent,
    RopaviewComponent,
    CreateropaComponent,
    EditeropaComponent,
    RopaDatosComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
