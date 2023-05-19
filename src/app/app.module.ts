import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppRouter } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { ProductosComponent } from './components/productos/productos.component';
//import {  appRoutingProviders,routing  } from './app-routing'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    DashboardsComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouter,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
