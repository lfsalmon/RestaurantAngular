import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router"
import { NgModule } from '@angular/core';


//import components
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardsComponent  } from "./components/dashboards/dashboards.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ProductosComponent } from "./components/productos/productos.component";

const routes:Routes=
[

  {path:'Login', component:LoginComponent},
  
  {path:'', component:MenuComponent,children: [
    { path: 'Products', component: ProductosComponent },
    { path: 'Home', component: DashboardsComponent }
    
  ]},

]

export const AppRouter = RouterModule.forRoot(routes);

