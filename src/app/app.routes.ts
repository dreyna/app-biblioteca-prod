import { Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LibroComponent } from './componentes/libro/libro.component';

export const routes: Routes = [
    {
        path:"",
        component: MenuComponent,
        title:"Menu"
    },
    {
        path:"libro",
        component:LibroComponent,
        title:"Producto"
    },
    {
        path:"**",
        redirectTo:"",
        pathMatch:"full"
    }
];
