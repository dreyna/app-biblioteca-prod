import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 items : MenuItem[];

 constructor(){
    this.items=[
      {
        label:"File",
        items:[
          {label:"open",icon:"pi pi-address-book"},
          {label:"open",icon:"pi pi-address-book"}
        ]
      },
      {label:"Nuevo",icon:"pi pi-apple"},
      {label:"Nuevo",icon:"pi pi-cart-plus"}
    ]
 }
}
